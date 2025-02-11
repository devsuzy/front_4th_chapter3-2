import { EventForm } from '../types';
import { formatDate } from './dateUtils';

export const createRepeatEvents = (eventData: EventForm) => {
  const repeatedEvents: EventForm[] = [];

  if (!eventData.repeat || eventData.repeat.type === 'none') {
    return [eventData];
  }

  const { type, interval, endDate } = eventData.repeat;
  const startDate = new Date(eventData.date);
  const repeatEndDate = endDate ? new Date(endDate) : null;
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
        currentDate.setDate(currentDate.getMonth() + interval);
        break;
      default:
        break;
    }
    if (repeatEndDate && currentDate > repeatEndDate) {
      break;
    }
  }

  return repeatedEvents;
};
