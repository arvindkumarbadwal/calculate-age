const { validate, calculate } = require('./lib')

class calculateAge
{
    constructor(dateOfBirth, compareDate = null) {
        this.dateOfBirth = dateOfBirth
        this.compareDate = compareDate ? compareDate : new Date()        
    }
    
    getObject() {
        validate(this.dateOfBirth, this.compareDate)

        return calculate(this.dateOfBirth, this.compareDate)
    }
    
    getString() {
        validate(this.dateOfBirth, this.compareDate)
        const diffObj = calculate(this.dateOfBirth, this.compareDate)

        let yearString = `${diffObj.years} ${diffObj.years == 1 ? 'year' : 'years'}`
        let monthString = `${diffObj.months} ${diffObj.months == 1 ? 'month' : 'months'}`
        let dayString = `${diffObj.days} ${diffObj.days == 1 ? 'day' : 'days'}`

        if (diffObj.years > 0) {
            return (diffObj.months > 0) ? `${yearString} ${monthString}` : `${yearString}`
        } else if (diffObj.months > 0) {
            return (diffObj.days > 0) ? `${monthString} ${dayString}` : `${monthString}`
        } else if (diffObj.days > 0) {
            return `${dayString}`
        } else {
            return `today`
        }
    }
}

export default calculateAge