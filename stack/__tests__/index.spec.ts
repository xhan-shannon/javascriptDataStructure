test("Hello World", () =>{
    const sum = require('../index')
    expect(sum(1, 2)).toBe(3);
})