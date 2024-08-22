module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/index.{js,jsx,ts,tsx}',
    '!src/i18n.ts',
    '!src/metrics.ts',
    '!src/**/*.d.ts'
  ],
  coverageReporters: [
    'text',
    'html',
    'cobertura',
    'json-summary',
  ],
  coverageThreshold: {
    global: {
      lines: 0,
      statements: 0,
      functions: 0,
      branches: 0
    }
  },
  globals: {
    SERVER_MODE: {
      mode: 'test'
    }
  },
  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node'
  ],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1'
  },
  setupFilesAfterEnv: ['jest-enzyme'],
  testEnvironment: 'enzyme',
  testEnvironmentOptions: {
    enzymeAdapter: 'react16'
  },
  testMatch: ['**/test/unit-tests/**/*.{js,jsx,ts,tsx}'],
  transform: {
    '^.+\\.(jsx?|tsx?)$': 'babel-jest',
    '^.+\\.(s?css|jpe?g|png|gif|eot|otf|webp|svg|ttf|woff2?|mp[34]|webm|wav|m4a|aac|oga)$': 'jest-transform-stub'
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(jsx?|tsx?)$'],
  coveragePathIgnorePatterns: ['<rootDir>/src/i18n/']
};
