import { validate, calculate } from './lib';

const calculateAge = (dateOfBirth: string | Date, compareDate?: string | Date) => {
    const dateOfBirthObj = typeof dateOfBirth === 'string' ? new Date(dateOfBirth) : dateOfBirth;
    const compareDateObj = compareDate ? (typeof compareDate === 'string' ? new Date(compareDate) : compareDate) : new Date();

    validate(dateOfBirthObj.toISOString(), compareDateObj.toISOString());

    return {
        getObject: () => calculate(dateOfBirthObj.toISOString(), compareDateObj.toISOString()),
        getString: () => {
            const diffObj = calculate(dateOfBirthObj.toISOString(), compareDateObj.toISOString());

            let yearString = `${diffObj.years} year${diffObj.years !== 1 ? 's' : ''}`;
            let monthString = `${diffObj.months} month${diffObj.months !== 1 ? 's' : ''}`;
            let dayString = `${diffObj.days} day${diffObj.days !== 1 ? 's' : ''}`;

            if (diffObj.years > 0) {
                return (diffObj.months > 0) ? `${yearString} ${monthString}` : `${yearString}`;
            } else if (diffObj.months > 0) {
                return (diffObj.days > 0) ? `${monthString} ${dayString}` : `${monthString}`;
            } else if (diffObj.days > 0) {
                return `${dayString}`;
            } else {
                return `today`;
            }
        }
    };
};

export default calculateAge;

