import { EventForm } from '../types';
import { formatDate, isLeapYear } from './dateUtils';

export const createRepeatEvents = (eventData: EventForm) => {
  const repeatedEvents: EventForm[] = [];

  if (!eventData.repeat || eventData.repeat.type === 'none') {
    return [eventData];
  }

  const getAdjustRepeatDate = (date: Date): Date => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    let adjustedDate = new Date(date);

    // 윤달 2월 29일이 반복일 경우, 2월 28일로 처리
    if (month === 1 && day === 29 && !isLeapYear(year)) {
      adjustedDate.setDate(28);
    }

    // 31일이 반복일 경우, 해당 월의 마지막 일자로 처리
    const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
    if (day > lastDayOfMonth) {
      adjustedDate.setDate(lastDayOfMonth);
    }

    return adjustedDate;
  };

  const { type, interval, endDate } = eventData.repeat;
  const startDate = new Date(eventData.date);
  const repeatEndDate = endDate ? new Date(endDate) : new Date('2025-06-30');
  let currentDate = new Date(startDate);

  while (!repeatEndDate || currentDate <= repeatEndDate) {
    repeatedEvents.push({
      ...eventData,
      date: formatDate(currentDate),
    });

    switch (type) {
      case 'daily':
        currentDate.setDate(currentDate.getDate() + interval);
        break;
      case 'weekly':
        currentDate.setDate(currentDate.getDate() + 7 * interval);
        break;
      case 'monthly':
        // 원래 설정된 날짜 저장 (31일인 경우 유지되도록)
        // eslint-disable-next-line no-case-declarations
        const originalDay = new Date(eventData.date).getDate();

        currentDate.setMonth(currentDate.getMonth() + interval, 1);

        // eslint-disable-next-line no-case-declarations
        const lastDayOfNewMonth = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() + 1,
          0
        ).getDate();

        // 원래 날짜 유지하되, 해당 월의 최대 날짜를 초과하면 마지막 날로 설정
        currentDate.setDate(Math.min(originalDay, lastDayOfNewMonth));
        break;
      case 'yearly':
        currentDate.setFullYear(currentDate.getFullYear() + interval);

        // 윤년이 아닌 해에서는 2월 28일로 조정
        if (currentDate.getMonth() === 2 && currentDate.getDate() === 1) {
          currentDate.setDate(0);
        }

        // 윤년을 다시 만나면 2월 29일로 조정
        if (
          currentDate.getMonth() === 1 &&
          currentDate.getDate() === 28 &&
          isLeapYear(currentDate.getFullYear())
        ) {
          currentDate.setDate(29);
        }
        currentDate = getAdjustRepeatDate(currentDate);
        break;
    }
    if (repeatEndDate && currentDate > repeatEndDate) {
      break;
    }
  }

  return repeatedEvents;
};
