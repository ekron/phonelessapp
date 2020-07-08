import { createCacheKey } from "./createCacheKey";

test("simple key value", () => {
  const t = { test1: "test" };
  const result = createCacheKey("someQuery", t);
  // Should be the same every time:
  expect(result).toBe(`9da9339ea9f149595c8fe2f25fc66cce`);
});

test("nested key values", () => {
  const t = { test1: { test2: "test" } };
  const result = createCacheKey("someQuery", t);
  // Should be the same every time:
  expect(result).toBe(`8f63f65a950df49e27dc82576ee3e9dd`);
});

test("array", () => {
  const t = { test1: { test2: "test", array: [1, 2, 3] } };
  const result = createCacheKey("someQuery", t);
  // Should be the same every time:
  expect(result).toBe(`441e7bd296cf8800c520c5378daeedc2`);
});

test("check stability: propery order", () => {
  // Minor variations in ordering of properties should be generate the same key
  const t1 = { test1: { test2: "test", test1: "test" } };
  const t2 = { test1: { test1: "test", test2: "test" } };
  const t1Result = createCacheKey("someQuery", t1);
  const t2Result = createCacheKey("someQuery", t2);
  expect(t1Result).toEqual(t2Result);
});

test("check stability: field name variation", () => {
  // Variations in fields should not be OK
  const t1 = { test1: { test2: "test", test1: "test" } };
  const t2 = { test2: { test1: "test", test2: "test" } };
  const t1Result = createCacheKey("someQuery", t1);
  const t2Result = createCacheKey("someQuery", t2);
  expect(t1Result).not.toEqual(t2Result);
});

test("check stability: value variation", () => {
  // Variations in field values should not be OK
  const t1 = { test1: { test2: "test", test1: "test" } };
  const t2 = { test1: { test2: "not a match", test1: "test" } };
  const t1Result = createCacheKey("someQuery", t1);
  const t2Result = createCacheKey("someQuery", t2);
  expect(t1Result).not.toEqual(t2Result);
});
