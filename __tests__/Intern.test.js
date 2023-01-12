const Intern = require("../lib/Intern");

describe("getRole", () => {
  it("should return the team member role", () => {
    const role = "Intern";
    const result= new Intern(this.role);
    expect(result.role).toBe(this.role);
  });
  it("should return the engineer id", () => {
    const school = "Uni";
    const result= new Intern(this.school);
    expect(result.school).toBe(this.school);
  });
});
