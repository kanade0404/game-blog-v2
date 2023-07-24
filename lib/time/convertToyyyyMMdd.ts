import { format, parseISO } from "date-fns";

type DateString = string;
type ConvertToYYYYMMdd = (date: DateString) => DateString;
export const convertToYYYYMMdd: ConvertToYYYYMMdd = (date) =>
  format(parseISO(date), "yyyy. MM. dd");
