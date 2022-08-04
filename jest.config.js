module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx'],
  moduleNameMapper: {
    '~/(.*)': '<rootDir>/$1',
  },
  rootDir: 'src',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage',
  coveragePathIgnorePatterns: [
    '<rootDir>/main.ts',
    '.mock.ts$',
    '.pipe.ts$',
  ],
  testEnvironment: 'node',
};
