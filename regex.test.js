const regex = require('./');
const testData = require('./testData')

function colorExtract(i) {
    const machGroup = regex.exec(i).groups;
    const cleanGroup = Object.keys(machGroup).reduce(function (previousValue, currentValue) {
        if(machGroup[currentValue]){
            return {...previousValue, [currentValue]: machGroup[currentValue]}
        }
        return previousValue
    }, {})
    return cleanGroup
}

console.log(regex)

testData.map((i) => {
    const haystack = i[0]
    const needle = i[1]

    test(`is haystack ${haystack} the needle is ${JSON.stringify(needle)}  `, () => {
        expect(colorExtract(haystack)).toStrictEqual(needle);
    });
})



