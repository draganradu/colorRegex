const regex = require('./');
const testData = require('./testData')

function colorExtract (i) {
    return "X"
} 

testData.map((i)=> {
    const haystack = i[0]
    const needle  = i[1]

    test(`is haystack ${haystack} the needle is ${needle}  `, () => {
        expect(colorExtract(haystack)).toBe(needle);
      });
})



