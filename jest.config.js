module.exports = {
  setupFilesAfterEnv: [
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
