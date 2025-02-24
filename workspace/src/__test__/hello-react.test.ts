import { expect, test } from "vitest";

function getGreeting() {
  return "Hello React";
}

test("getGreeting works correctly", () => {
  const actualGreeting = getGreeting();

  expect(actualGreeting).toBe("Hello React");
  expect(actualGreeting).not.toBe("Hello Angular");
});
