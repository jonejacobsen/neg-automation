// index.js
const authentication = require('./authentication');

const gmailInvitationTrigger = require('./triggers/gmail_invitation');
const extractGuestInfo = require('./actions/extract_guest_info');
const createDanishMenu = require('./actions/create_danish_menu');
const guestAnalysis = require('./actions/guest_analysis');
const calendarWorkflow = require('./actions/calendar_workflow');
const prepTimeline = require('./actions/prep_timeline');

module.exports = {
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,
  authentication,
  triggers: {
    [gmailInvitationTrigger.key]: gmailInvitationTrigger
  },
  searches: {},
  creates: {
    [extractGuestInfo.key]: extractGuestInfo,
    [createDanishMenu.key]: createDanishMenu,
    [guestAnalysis.key]: guestAnalysis,
    [calendarWorkflow.key]: calendarWorkflow,
    [prepTimeline.key]: prepTimeline
  }
};