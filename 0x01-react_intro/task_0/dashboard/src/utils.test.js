// Import the necessary functions
import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

// Test suite for getFullYear function
describe("getFullYear function", () => {
  // Test case to check if getFullYear returns the current year
  it("returns the current year", () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toEqual(currentYear);
  });
});

// Test suite for getFooterCopy function
describe("getFooterCopy function", () => {
  // Test case to check the return value when the argument is true
  it("returns correct string for true argument", () => {
    const expectedString = "Holberton School";
    expect(getFooterCopy(true)).toEqual(expectedString);
  });

  // Test case to check the return value when the argument is false
  it("returns correct string for false argument", () => {
    const expectedString = "Holberton School main dashboard";
    expect(getFooterCopy(false)).toEqual(expectedString);
  });
});

// Test suite for getLatestNotification function
describe("getLatestNotification function", () => {
  // Test case to check if the returned string is not empty
  it("returns a non-empty string", () => {
    const notification = getLatestNotification();
    expect(notification).toBeTruthy();
  });
});
