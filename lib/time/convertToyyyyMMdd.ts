import { format, parseISO } from "date-fns";
import utcToZonedTime from "date-fns-tz/utcToZonedTime";

type DateString = string;
type ConvertToYYYYMMdd = (date: DateString) => DateString;
export const convertToYYYYMMdd: ConvertToYYYYMMdd = (date) =>
  format(utcToZonedTime(parseISO(date), "Asia/Tokyo"), "yyyy. MM. dd");
