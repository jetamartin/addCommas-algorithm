const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
  test("No commas for 3 digit or less numbers (postive and negative number)", () => {
    expect(addCommas(6)).toBe("6")
    expect(addCommas(-10)).toBe("-10")
    expect(addCommas(123)).toBe("123")
    expect(addCommas(-999)).toBe("-999")
  })
  test("Adds one or more commas for 4 digit or greater numbers (positive and negative numbers)", () => {
    expect(addCommas(1234)).toBe("1,234")
    expect(addCommas(1000000)).toBe("1,000,000")
    expect(addCommas(9876543210)).toBe("9,876,543,210")
    expect(addCommas(-1234)).toBe("-1,234")
    expect(addCommas(-5678)).toBe("-5,678")
    expect(addCommas(-1000000)).toBe("-1,000,000")
    expect(addCommas(-9876543210)).toBe("-9,876,543,210")
  });
  test("Handles numbers of all sizes with decimal places (negative and positive", () => {
    expect(addCommas(.6543)).toBe("0.6543")
    expect(addCommas(-.6543)).toBe("-0.6543")
    expect(addCommas(999.2)).toBe("999.2")
    expect(addCommas(-999.2)).toBe("-999.2")
    expect(addCommas(1234.111)).toBe("1,234.111")
    expect(addCommas(10000000.88)).toBe("10,000,000.88")
    expect(addCommas(-9876543210.12345)).toBe("-9,876,543,210.12345")
  })
});

