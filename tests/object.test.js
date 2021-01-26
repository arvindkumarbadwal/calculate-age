const calculateAge = require('../dist/index.js').default
//import calculateAge from '../dist/index.js'

describe("Testing Object Function", () => {
    test("validate date of birth", () => {
        const date_of_birth = '1988-10-26'
        const today_date = '2021-01-26'
        const expected = { years: 32, months: 3, days: 10 }

        const output = new calculateAge(date_of_birth, today_date).getObject()

        expect(output).toMatchObject(expected)
    })
})