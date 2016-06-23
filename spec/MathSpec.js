describe("Basic Math function", function() {

  it("should have an add function", function() {
    expect(add).toBeDefined();
  });

  it("should add two integers", function() {
    expect(add(2, 5)).toBe(7);
  });



  it("should have a subtract function", function() {
    expect(subtract).toBeDefined();
  });

  it("should subtract two integers", function() {
    expect(subtract(7, 5)).toBe(2);
  });



  it("should have a multiply function", function() {
    expect(multiply).toBeDefined();
  });

  it("should multiply two integers", function() {
    expect(multiply(2, 2)).toBe(4);
  });



  it("should have a divide function", function() {
    expect(divide).toBeDefined();
  });

  it("should divide two integers", function() {
    expect(divide(6, 3)).toBe(2);
  });



  it("should have a square function", function() {
    expect(square).toBeDefined();
  });

  it("should square and integer", function() {
    expect(square(7)).toBe(49);
  });



  it("should have a square root function", function() {
    expect(squareRoot).toBeDefined();
  });

  it("should find the square root of an integer", function() {
    expect(squareRoot(49)).toBe(7);
  });



});
