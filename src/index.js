const fs = require("fs");

function getPluginConfig(config, reportError) {
  if (
    Object.keys(config).includes("env") &&
    Object.keys(config.env).includes("noRecordVideoTestPassed") &&
    !!config.env.noRecordVideoTestPassed.enable
  ) {
    return config.env.noRecordVideoTestPassed;
  } else {
    if (!!reportError)
      console.error(
        "No Record Video if test passed is disabled.  Please set env:{noRecordVideoTestPassed:{enable:true}}",
        true
      );
  }
}

const registerAIOTestsPlugin = (on, config) => {
  on("before:run", () => {
    getPluginConfig(config, true);
  });

  on("after:spec", (spec, results) => {
    if (results && results.video) {
      // Do we have failures for any retry attempts?
      const failures = results.tests.some((test) =>
        test.attempts.some((attempt) => attempt.state === "failed")
      );
      if (!failures) {
        // delete the video if the spec passed and no tests retried
        fs.unlinkSync(results.video);
      }
    }
  });
};

module.exports = { registerAIOTestsPlugin };
