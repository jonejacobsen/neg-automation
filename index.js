====================================
const authentication = require('./authentication');
const triggers = require('./triggers/dinner_party_invite');
const extractGuestInfo = require('./actions/extract_guest_info');
const createDanishMenu = require('./actions/create_danish_menu');
const schedulePrep = require('./actions/schedule_prep');

module.exports = {
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,

  authentication,

  triggers: {
    [triggers.key]: triggers,
  },

  actions: {
    [extractGuestInfo.key]: extractGuestInfo,
    [createDanishMenu.key]: createDanishMenu,
    [schedulePrep.key]: schedulePrep,
  },
};
```

```plaintext
====================================