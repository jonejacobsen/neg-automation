const helloWorldTrigger = require('./triggers/hello_world');

const App = {
  version: require('zapier-platform-core').version,
  platformVersion: require('zapier-platform-core').platformVersion,

  // No authentication
  authentication: null,

  triggers: {
    [helloWorldTrigger.key]: helloWorldTrigger,
  },

  searches: {},
  creates: {},
};

module.exports = App;
```

```plaintext
//