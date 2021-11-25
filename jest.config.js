/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/main/**',
    '!<rootDir>/src/main/**',
    '!**/node_modules/**'
  ],
  testMatch: ['**/*.spec.ts'],
  coverageProvider: 'babel',
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1'
  },
  setupFiles: ['dotenv/config'],
  roots: [
    '<rootDir>/src'
  ],
  transform: {
    '\\.ts$': 'ts-jest'
  },
};
