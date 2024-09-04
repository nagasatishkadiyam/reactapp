const { sum } = require("../sum");


test("sum function will calculate the 2 numbers and returns the result", () => {
    const result = sum(3,7);
    
    //assertion
    expect(result).toBe(10);
});