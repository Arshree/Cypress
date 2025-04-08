const { defineConfig } = require("cypress");
//const cypressE2eConfig = require('./cypress/spec')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
