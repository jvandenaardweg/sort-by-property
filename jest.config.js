/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  roots: ['<rootDir>/src/'],
  collectCoverageFrom: ['(src)/**/*.ts'],
  coverageDirectory: './coverage',
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 75,
      lines: 75,
      statements: 75,
    },
  },
  testEnvironment: 'node',
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
  },
};
