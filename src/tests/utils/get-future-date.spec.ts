import { expect, test } from "vitest";
import { getFutureDate } from "./get-future-date";

test("increases date with one year", () => {
  const year = new Date().getFullYear();
  const futureYear = year + 1;
  
  expect(getFutureDate(`${year}-06-14`).getFullYear()).toEqual(futureYear);
});
