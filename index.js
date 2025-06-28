const { version } = require('./package.json');
const manualTrigger = require('./triggers/manual_trigger');

module.exports = {
  version,
  platformVersion: require('zapier-platform-core').version,
  triggers: {
    [manualTrigger.key]: manualTrigger,
  },
  // No authentication required
};
```

```plaintext
#