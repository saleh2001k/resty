module.exports = {
    verbose: true,
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    moduleNameMapper: {
      '\\.(css|less|scss)$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: [
      '<rootDir>/src/setupTests.js',
    ],
  };