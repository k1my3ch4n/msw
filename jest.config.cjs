module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  clearMocks: true,
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
};
