import { sum } from "../src/sum";

test("Should sum two numbers", () => {
  const res = sum(2, 3);
  expect(res).toBe(5);
});