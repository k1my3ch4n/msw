module.exports = {
  testEnvironment: "jsdom",
  coverageDirectory: "<rootDir>/reports/coverage/",
  collectCoverageFrom: [
    "**/src/**/*.[jt]s?(x)",
    "!**/src/fixtures/**",
    "!**/src/mocks/**",
    "!**/src/*.[jt]s?(x)",
  ],
  reporters: [
    "default",
    [
      "jest-html-reporters",
      {
        publicPath: "./reports",
        filename: "test_report.html",
        pageTitle: "Test Report",
        openReport: true,
        inlineSource: true,
        hideIcon: true,
      },
    ],
  ],
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  clearMocks: true,
};
