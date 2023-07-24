import { convertToYYYYMMdd } from "./convertToyyyyMMdd";
describe("convertToyyyyMMdd", () => {
  it("should convert date to yyyyMMdd", () => {
    expect(convertToYYYYMMdd("2023-01-01T01:23:45+09:00")).toEqual("2023. 01. 01");
  });
});
