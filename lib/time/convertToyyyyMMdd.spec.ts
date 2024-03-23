import { describe, expect, test } from "vitest";
import { convertToYYYYMMdd } from "./convertToyyyyMMdd";
describe("convertToyyyyMMdd", () => {
	test.each([
		["2023-01-01T01:23:45+09:00", "2023. 01. 01"],
		["2023-12-31T23:59:59+09:00", "2023. 12. 31"],
	])("yyyyMMdd(%s) should convert date to %s", (date, expected) => {
		expect(convertToYYYYMMdd(date)).toEqual(expected);
	});
});
