const dayjs = require('dayjs')
const duration = require('dayjs/plugin/duration')
dayjs.extend(duration)

const isValid = (dateString) => {
    return dayjs(dateString).isValid()
}

const isBefore = (birthDate, compareDate) => {
    const currentDay = dayjs(compareDate)
    const birthDay = dayjs(birthDate)

    return birthDay.isBefore(currentDay)
}

export const validate = (birthDate, compareDate) => {
    if (!isValid(birthDate) && !isValid(compareDate)) {
        throw 'Invalid date format'
    }

    if (!isBefore(birthDate, compareDate)) {
        throw 'Invalid date'
    }
}

export const calculate = (birthDate, compareDate) => {
    const currentDay = dayjs(compareDate)
    const birthDay = dayjs(birthDate)

    const dateDiff = dayjs.duration(currentDay.diff(birthDay))

    return {
        'years': dateDiff.years(),
        'months': dateDiff.months(),
        'days': dateDiff.days()
    }
}