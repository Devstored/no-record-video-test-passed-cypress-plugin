const { defineConfig } = require("cypress");
const { noRecordVideoTestPassed } = require("./src/index");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      noRecordVideoTestPassed(on, config);
    },
    supportFile: false,
  },
  env: {
    noRecordVideoTestPassed: {
      enable: true,
    },
  },
});
