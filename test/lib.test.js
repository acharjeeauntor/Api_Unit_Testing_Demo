// test('my first test', () => {

// })

const lib = require("../lib");
const exercise = require("../exercise1");

describe("absolute", () => {
  it("should be positive if input is a positive number", () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });

  it("should be positive if input is a negative number", () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });
  it("should be 0 if input is a 0", () => {
    const result = lib.absolute(0);
    expect(result).toBe(0);
  });
});

describe("greet", () => {
  it("should return the greeting message", () => {
    const result = lib.greet("Auntor");
    expect(result).toMatch(/Auntor/);
    expect(result).toContain("Auntor");
  });
});

describe("getCurrencies", () => {
  it("should return currencies", () => {
    const result = lib.getCurrencies();
    expect(result).toEqual(expect.arrayContaining(["EUR", "AUD", "USD"]));
  });
});

describe("getProduct", () => {
  it("Should return object info with object ID", () => {
    const result = lib.getProduct(1);
    // expect(result).toEqual({ id: 1, price: 10 });
    expect(result).toMatchObject({ id: 1, price: 10 });
    expect(result).toHaveProperty("id", 1);
  });
});

describe("registerUser", () => {
  it("should throw if username is falsy", () => {
    let args = [null, undefined, "", 0, false];
    args.forEach((a) => {
      expect(() => {
        lib.registerUser(a);
      }).toThrow();
    });
  });

  it("should return username", () => {
    const result = lib.registerUser("Auntor");
    expect(result).toMatchObject({ username: "Auntor" });
    expect(result.id).toBeGreaterThan(0);
  });
});


