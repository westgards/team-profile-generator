const Employee = require("../lib/Employee");

describe("Employee", () => {
  it("should return the userInput name", () => {
    const name = "Carl";
    const result = new Employee(name);
    expect(result.name).toBe(name);
  });
  describe("Employee", () => {
    it("should return the userInput name", () => {
      const id = "1";
      const result = new Employee(this.id);
      expect(result.id).toBe(this.id);
    });
    describe("Employee", () => {
      it("should return the userInput name", () => {
        const email = "meow@fake.com";
        const result = new Employee(this.email);
        expect(result.email).toBe(this.email);
      });
    });
  });
});
