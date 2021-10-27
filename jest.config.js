const config = {
  collectCoverageFrom: [ "src/**/*.js" ],
  testEnvironment: "node",
  testMatch: [ "<rootDir>/tests/**/*.js" ],
  watchPathIgnorePatterns: [ "<rootDir>/node_modules/" ]
}

module.exports = config
