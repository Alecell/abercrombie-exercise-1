import { parseDate, isValidDate } from './general.js';

describe("General Helpers", () => {
  describe("parseDate", () => {
    it("accepts ISODate", () => {
      expect(parseDate('2021-03-31T16:19:30.516Z')).toEqual({ date: '03/31/2021', time: '13:19' });
    })
    it("accepts timestamps", () => {
      expect(parseDate(1632636043616)).toEqual({ date: '09/26/2021', time: '03:00' });
    })
    it("returns empty `date` and `time` when a invalid date is sent", () => {
      expect(parseDate('foobar')).toEqual({ date: '', time: '' });
    })
    it("returns empty `date` and `time` when no date is sent", () => {
      expect(parseDate()).toEqual({ date: '', time: '' });
    })
  })

  describe("isValidDate", () => {
    it("correctly validate a valid date", () => {
      expect(isValidDate(new Date('2021-03-31T16:19:30.516Z'))).toEqual(true);
    })
    it("correctly validate an invalid date", () => {
      expect(isValidDate(new Date('foobar'))).toBe(false);
    })
    it("do not treat string dates as a valid date", () => {
      expect(isValidDate('2021-03-31T16:19:30.516Z')).toBe(false);
    })
    it("do not treat timestamps dates as a valid date", () => {
      expect(isValidDate(1632636043616)).toBe(false);
    })
  })
});