const {fromDollarToYen, fromEuroToDollar, fromYenToPound} = require('./app.js');

test("3.5 dollars should be 511.91 yens",() => {
    const yen = fromDollarToYen(3.5);
    const expected = (3.5 / 1.07) * 156.5;

    expect(yen).toBe(expected);
})

test("One euro should be 1.07 dollars", function() {
    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test('3.5 yens should be 0.01 pound', () => {
    const pounds = fromYenToPound(3.5);
    const expected = (3.5 / 156.5) * 0.87;

    expect(pounds).toBe(expected);
})