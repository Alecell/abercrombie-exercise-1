import { creationDate } from './hbs.js';

describe("Handlebars Helpers", () => {
  describe("makeDate", () => {
    it("accepts ISODate", () => {
      expect(creationDate('2021-03-31T16:19:30.516Z')).toBe("03/31/2021 at 13:19");
    })
    it("accepts timestamps", () => {
      expect(creationDate(1632636043616)).toBe("09/26/2021 at 03:00");
    })
    it("returns `fallbackMessage` on invalid dates", () => {
      const message = "Invalid date";
      expect(creationDate('foobar', message)).toBe(message);
    })
  });
});