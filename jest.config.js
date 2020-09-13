module.exports = {
  setupFilesAfterEnv: [
    'jest-plugin-context/setup',
    'given2/setup',
    './jest.setup',
  ],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  modulePathIgnorePatterns: [
    '<rootDir>/.cache',
  ],
};
