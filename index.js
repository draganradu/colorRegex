const hexG = (number) => {
    return `(#(?:\\s)|hex(?:\:|)(?:\\s|)|hex${number}\\s)`
}

const h = (number) => { 
    return `[a-f0-9]{${number}}`
}

const regex = {
    hex3: `(?<hex3>(?:${hexG(3)})(?<r3>${h(1)})(?<g3>${h(1)})(?<b3>${h(1)}))`,
    hex4: `(?<hex4>(?:${hexG(4)})(?<r4>${h(1)})(?<g4>${h(1)})(?<b4>${h(1)})(?<a4>${h(1)}))`,
    hex6: `(?<hex6>(?:${hexG(6)})(?<r6>${h(2)})(?<g6>${h(2)})(?<b6>${h(2)}))`,
    hex8: `(?<hex8>(?:${hexG(8)})(?<r8>${h(2)})(?<g8>${h(2)})(?<b8>${h(2)})(?<a8>${h(2)}))`,

}

const regexColor = new RegExp([regex.hex8, regex.hex6, regex.hex4, regex.hex3].join("|"), 'i')

module.exports = regexColor;