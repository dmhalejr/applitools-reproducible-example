module.exports = {
  preset: "ts-jest",
  verbose: false,
  bail: true,
  testMatch: [
    `<rootDir>/dist/*.[jt]s?(x)`,
  ],
  transform: {
    "^.+\\.js?$": "babel-jest",
    "^.+\\.ts?$": "ts-jest",
  },
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFilesAfterEnv: ["<rootDir>/config/jest/jest.setup.js"],
  reporters: ["default"],
};
