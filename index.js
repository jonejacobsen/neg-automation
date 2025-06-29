const authentication = require('./authentication');
const trigger = require('./triggers/email_invitation');
const extractGuestInfo = require('./actions/extract_guest_info');
const createDanishMenu = require('./actions/create_danish_menu');
const schedulePrepTimeline = require('./actions/schedule_prep_timeline');

module.exports = {
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,
  authentication,
  triggers: {
    [trigger.key]: trigger,
  },
  actions: {
    [extractGuestInfo.key]: extractGuestInfo,
    [createDanishMenu.key]: createDanishMenu,
    [schedulePrepTimeline.key]: schedulePrepTimeline,
  }
};
```

```plaintext
#