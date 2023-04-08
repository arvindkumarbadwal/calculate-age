# calculate-age

This package is use to calculate age of a given date of birth.

![npm](https://img.shields.io/npm/v/calculate-age?style=for-the-badge)
![npm](https://img.shields.io/npm/dt/calculate-age?style=for-the-badge)

## Installation

```sh
npm install calculate-age
```

## Using 

Function Parameter
```js
    calculateAge(dateOfBirth: string | Date, compareDate?: string | Date)
```

Example
```js
import calculateAge from 'calculate-age'
// OR const calculateAge = require('calculate-age').default

const output = calculateAge('1988-10-26', '2021-01-26').getObject()
// output: { years: 32, months: 3, days: 10 }

const output = calculateAge('1988-10-26', '2021-01-26').getString()
// output: 32 years 3 months
```

## Output
```js
getObject() --> getString()
// { years: 5, months: 3, days: 2 } --> 5 years 3 months
// { years: 5, months: 0, days: 0 } --> 5 years
// { years: 0, months: 3, days: 2 } --> 3 months 2 days
// { years: 0, months: 3, days: 0 } --> 3 months
// { years: 0, months: 0, days: 2 } --> 2 days

// { years: 1, months: 2, days: 0 } --> 1 year 2 months
// { years: 1, months: 0, days: 0 } --> 1 year
// { years: 0, months: 1, days: 2 } --> 1 month 2 days
// { years: 0, months: 1, days: 0 } --> 1 month
// { years: 0, months: 0, days: 1 } --> 1 day
```
## Release Notes - Version 1.0.0

### Features

- Added TypeScript support to the package.
- Changed from class-based to function-based implementation for `calculateAge` method, removing the need for `new` keyword.
- Made `compareDate` optional in `calculateAge` method, defaulting it to today's date.


## Contributing

If you find a bug or willing to add some enhancement, pull requests are very welcome

## :copyright: License

[MIT](http://opensource.org/licenses/MIT)
