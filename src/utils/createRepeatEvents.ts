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
    const adjustedDate = new Date(date);

    // 윤달 2월 29일이 반복일 경우, 2월 28일로 처리
    if (month === 1 && day === 29 && !isLeapYear(year)) {
      adjustedDate.setDate(28);
    }

    // 31일이 반복일 경우, 해당 월의 마지막 일자로 처리
    if (day === 31) {
      const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
      if (day > lastDayOfMonth) {
        adjustedDate.setDate(lastDayOfMonth);
      }
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
        // eslint-disable-next-line no-case-declarations
        const prevDay = currentDate.getDate();
        currentDate.setMonth(currentDate.getMonth() + interval);

        // eslint-disable-next-line no-case-declarations
        const lastDayOfNewMonth = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() + 1,
          0
        ).getDate();

        currentDate.setDate(prevDay > lastDayOfNewMonth ? lastDayOfNewMonth : prevDay);
        currentDate = getAdjustRepeatDate(currentDate);
        break;
      case 'yearly':
        currentDate.setFullYear(currentDate.getFullYear() + interval);
        currentDate = getAdjustRepeatDate(currentDate);
        break;
    }
    if (repeatEndDate && currentDate > repeatEndDate) {
      break;
    }
  }

  return repeatedEvents;
};
