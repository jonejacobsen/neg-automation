// __tests__/actions/guest_analysis.test.js

const zapier = require('zapier-platform-core');
const App = require('../../index');
const appTester = zapier.createAppTester(App);

describe('Action - Guest Analysis', () => {
  it('should return guest insights and a summary', async () => {
    const bundle = {
      authData: {api_key: 'secret'},
      inputData: {
        guest_names: ['Bjorn Berg', 'Alice Andersen'],
        dietary_restrictions: ['Vegetarian']
      }
    };
    const result = await appTester(App.creates.guest_analysis.operation.perform, bundle);
    expect(result.insights.some(x => /Bjorn Berg/.test(x))).toBe(true);
    expect(result.summary).toMatch(/2 guests analyzed/);
  });
});