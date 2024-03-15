const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
  },
});
