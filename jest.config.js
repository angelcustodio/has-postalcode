const config = {
  collectCoverageFrom: [ "src/**/*.js" ],
  testEnvironment: "node",
  testMatch: [ "<rootDir>/tests/**/*.js" ],
  verbose: true,
  watchPathIgnorePatterns: [ "<rootDir>/node_modules/" ]
}

module.exports = config
