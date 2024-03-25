# noRecordVideoTestPassed

The `noRecordVideoTestPassed` Cypress plugin allows for not recording videos of tests that pass. This can help save storage space used by test videos by only keeping videos of failed tests.

## Installation

To use `noRecordVideoTestPassed`, start by installing it as a development dependency in your Cypress project:

```sh
npm install no-record-video-test-passed-cypress-plugin --save-dev
```

or if you're using Yarn:

```sh
yarn add no-record-video-test-passed-cypress-plugin --dev
```

## Configuration

After installation, you need to configure the plugin in your Cypress project.

1. Open the `cypress/plugins/index.js` file and add the following code:

```javascript
const {
  noRecordVideoTestPassedPlugin,
} = require("no-record-video-test-passed-cypress-plugin/src");

module.exports = (on, config) => {
  noRecordVideoTestPassedPlugin(on, config);
};
```

2. Then, configure the plugin in your `cypress.config.js` file (or whichever configuration file you are using) to enable or disable the feature:

```javascript
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    noRecordVideoTestPassed: {
      enable: true,
    },
  },
  // Your other Cypress configurations...
});
```

Make sure to replace `"enable": true` with `false` if you wish to temporarily disable the deletion of videos for passed tests.

## Usage

Once installed and configured, the plugin will work automatically. No further action is required. Videos for tests that pass will not be saved, according to your configuration.

## Configuration Options

Currently, the plugin supports the following configuration:

- `enable`: A boolean (`true` | `false`) to enable or disable the deletion of videos for tests that pass.

## Support and Contributions

For support, questions, or suggestions, please open an issue in the plugin's GitHub repository.

Contributions to the project are welcome! If you would like to contribute, please read the contribution guidelines provided in the GitHub repository of the plugin.

## License

This project is licensed under the MIT License. For more details, see the `LICENSE` file in the GitHub repository of the plugin.

---

This `README.md` provides a basic guide for installing, configuring, and using your `noRecordVideoTestPassed` Cypress plugin. You can adjust it based on the specifics of your plugin and the needs of your project.
