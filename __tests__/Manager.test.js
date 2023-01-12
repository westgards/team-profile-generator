const Manager = require("../lib/Manager");

describe("Manager", () => {
  it("should return the userInput name", () => {
    const role = "Manager";
    const result = new Manager(this.role);
    expect(result.role).toBe(this.role);
  });
});
