import { Temporal } from "@js-temporal/polyfill";

type DateString = string;
type ConvertToYYYYMMdd = (date: DateString) => DateString;
export const convertToYYYYMMdd: ConvertToYYYYMMdd = (date) => {
	const temporal = Temporal.PlainDate.from(date);
	return `${temporal.year}. ${`${temporal.month}`.padStart(
		2,
		"0",
	)}. ${`${temporal.day}`.padStart(2, "0")}`;
};
