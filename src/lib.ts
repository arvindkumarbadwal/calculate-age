const isValid = (dateString: string): boolean => {
    return !isNaN(Date.parse(dateString));
}

const isBefore = (birthDate: string, compareDate: string): boolean => {
    const currentDay: Date = new Date(compareDate);
    const birthDay: Date = new Date(birthDate);

    return birthDay <= currentDay;
}

export const validate = (birthDate: string, compareDate: string): void => {
    if (!isValid(birthDate) || !isValid(compareDate)) {
        throw new Error('Invalid date format');
    }

    if (!isBefore(birthDate, compareDate)) {
        throw new Error('Invalid date');
    }
}

export const calculate = (birthDate: string, compareDate: string): {
    years: number,
    months: number,
    days: number
} => {
    const currentDay: Date = new Date(compareDate);
    const birthDay: Date = new Date(birthDate);

    const yearsDiff: number = currentDay.getFullYear() - birthDay.getFullYear();
    const monthsDiff: number = currentDay.getMonth() - birthDay.getMonth();
    const daysDiff: number = currentDay.getDate() - birthDay.getDate();

    let years: number = yearsDiff;
    let months: number = monthsDiff;
    let days: number = daysDiff;

    if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
        years--;
        months += 12;
    }

    if (daysDiff < 0) {
        const lastMonthDays: number = new Date(
            currentDay.getFullYear(),
            currentDay.getMonth(),
            0
        ).getDate();

        months--;
        days += lastMonthDays;
    }

    return {
        'years': years,
        'months': months,
        'days': days
    };
};

