import calculateAge from '../dist/index';

type ReturnObject = { years: number, months: number, days: number };

test("validate date of birth", () => {
    const date_of_birth = '1988-10-26'
    const today_date = '2021-01-28'
    const expected = { years: 32, months: 3, days: 2 }

    const output = calculateAge(date_of_birth, today_date).getObject()

    expect(output).toMatchObject<ReturnObject>(expected)
})

test("validate date of birth only year", () => {
    const date_of_birth = '1988-10-26'
    const today_date = '2022-10-26'
    const expected = { years: 34, months: 0, days: 0 }

    const output = calculateAge(date_of_birth, today_date).getObject()

    expect(output).toMatchObject<ReturnObject>(expected)
})

test("validate only date of birth parameters", () => {
    const date_of_birth = '1988-10-26'

    const output = calculateAge(date_of_birth).getObject()

    expect(output).toBeDefined();
})

test("validate only date of birth parameters", () => {
    const date_of_birth = '1988-10-26'
    const today_date = '1988-10-26'

    const output = calculateAge(date_of_birth, today_date).getString()

    expect(output).toEqual('today');
})