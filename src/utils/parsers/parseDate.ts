import { format, parseISO } from 'date-fns';

export const parseDate = (isoDate: string): string => {
  const dateObject = parseISO(isoDate);

  const formattedDate = format(dateObject, 'dd MMM yyyy');

  return formattedDate;
};
