module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    extensionsToTreatAsEsm: ['.ts'],
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.json',
            useESM: true,
        },
    },
};
