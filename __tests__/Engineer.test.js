const Engineer = require("../lib/Engineer");

describe("getName", () => {
    it("should return the userInput name", () => {
      const name = "Carl";
      const result = new Engineer(name);
      expect(result.name).toBe(name);
    });
    describe("getId", () => {
      it("should return the userInput name", () => {
        const id = 1;
        const result = new Engineer("Syd", this.id);
        expect(result.id).toBe(this.id);
      });
      describe("getEmail", () => {
        it("should return the userInput name", () => {
          const email = "meow@fake.com";
          const result = new Engineer("Syd", this.id, this.email);
          expect(result.email).toBe(this.email);
        });
describe("getRole", () => {
it("should return the userInput role", () => {
    const role = "Engineer";
    const result = new Engineer(this.role);
    expect(result.role).toBe(this.role);
        });
      });
    });
  });
});


