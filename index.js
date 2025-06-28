const { version } = require('./package.json');

const helloWorldTrigger = require('./triggers/hello_world');

module.exports = {
  version,
  platformVersion: require('zapier-platform-core').version,
  triggers: {
    [helloWorldTrigger.key]: helloWorldTrigger
  }
};
```

```plaintext
#