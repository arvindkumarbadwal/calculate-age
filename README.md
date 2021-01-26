# calculate-age

This package is use to calculate age of a given date of birth.

![npm](https://img.shields.io/npm/v/calculate-age?style=for-the-badge)
![npm](https://img.shields.io/npm/dt/calculate-age?style=for-the-badge)

## Installation

```sh
npm install calculate-age
```

## Using 
```js
import calculateAge from 'calculate-age'
// or const calculateAge = require('calculate-age').default

const output = new calculateAge('1988-10-26', '2021-01-26').getObject()
// output: { years: 32, months: 3, days: 10 }

const output = new calculateAge('1988-10-26', '2021-01-26').getString()
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

## Contributing

If you find a bug or willing to add some enhancement, pull requests are very welcome

## :copyright: License

[MIT](http://opensource.org/licenses/MIT)
