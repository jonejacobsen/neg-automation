module.exports = {
  testEnvironment: 'node',
  testMatch: [
    "**/test/**/*.test.js"
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    "triggers/**/*.js",
    "index.js"
  ]
};