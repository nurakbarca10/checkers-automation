const { defineConfig } = require('cypress')

module.exports = defineConfig({
  //retries: 1,
  reporter: 'cypress-mochawesome-reporter',
  defaultCommandTimeout: 5000,
  e2e: {
    viewportWidth: 1980,
    viewportHeight: 1080,
    screenshotOnRunFailure: true,
    baseUrl: 'https://www.gamesforthebrain.com',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on, config)
    },
    env: {
      hideXhr: true,
    },
  },
})
