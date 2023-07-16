import { format, parseISO } from "date-fns";

export const convertToYYYYMMdd = (date: string) => format(parseISO(date), "yyyy. MM. dd");
