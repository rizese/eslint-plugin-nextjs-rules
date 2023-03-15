// Import the file that we want to test
const testsIndex = require("../lib/index");

describe("testsIndex", () => {
  test('should export an object named "rules"', () => {
    // Check that the file exports exactly one thing
    expect(Object.keys(testsIndex)).toHaveLength(1);

    // Check that the key of the exported thing is "rules"
    expect(Object.keys(testsIndex)[0]).toBe("rules");
  });

  test('should have a "rules" object with the "no-get-server-side-props" rule', () => {
    // Check that the file has a "rules" object
    expect(testsIndex.rules).toBeDefined();

    // Check that the "no-get-server-side-props" rule exists in the "rules" object
    expect(testsIndex.rules["no-get-server-side-props"]).toBeDefined();
  });
});
