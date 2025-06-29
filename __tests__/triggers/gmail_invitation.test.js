// __tests__/triggers/gmail_invitation.test.js

const zapier = require('zapier-platform-core');
const App = require('../../index');
const appTester = zapier.createAppTester(App);

describe('Trigger - Gmail Invitation', () => {
  it('should return only emails with "dinner party invitation" in subject', async () => {
    const bundle = {authData: {api_key: 'secret'}};
    const results = await appTester(App.triggers.gmail_invitation.operation.perform, bundle);
    expect(results.length).toBe(1);
    expect(results[0].subject).toMatch(/dinner party invitation/i);
    expect(results[0].id).toBeDefined();
    expect(results[0].from).toBeDefined();
  });
});