// __tests__/actions/create_danish_menu.test.js

const zapier = require('zapier-platform-core');
const App = require('../../index');
const appTester = zapier.createAppTester(App);

describe('Action - Create Danish Menu', () => {
  it('should generate a 3-course Danish menu and local store suggestions', async () => {
    const bundle = {
      authData: {api_key: 'secret'},
      inputData: {context: 'Danish cuisine, Aarhus'}
    };
    const result = await appTester(App.creates.create_danish_menu.operation.perform, bundle);
    expect(result.menu).toBeDefined();
    expect(Array.isArray(result.menu)).toBe(true);
    expect(result.menu.length).toBeGreaterThanOrEqual(3);
    expect(result.store_suggestions).toContain('Aarhus Fish Market');
  });
});