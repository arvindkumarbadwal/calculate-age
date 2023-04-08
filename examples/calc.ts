import calculateAge from '../dist/index';

const date_of_birth = '1988-10-26'
const today_date = '2021-01-28'

console.log( calculateAge(date_of_birth, today_date).getObject());
console.log( calculateAge(date_of_birth, today_date).getString());