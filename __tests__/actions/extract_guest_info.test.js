// __tests__/actions/extract_guest_info.test.js

const zapier = require('zapier-platform-core');
const App = require('../../index');
const appTester = zapier.createAppTester(App);

describe('Action - Extract Guest Info', () => {
  it('should extract guest info and date from email body', async () => {
    const bundle = {
      authData: {api_key: 'secret'},
      inputData: {body: 'Alice and Bjorn invited. Vegetarian. See you Friday (2024-06-07)!'}
    };
    const result = await appTester(App.creates.extract_guest_info.operation.perform, bundle);
    expect(result.guest_names).toBeDefined();
    expect(Array.isArray(result.guest_names)).toBe(true);
    expect(result.dietary_restrictions).toContain('Vegetarian');
    expect(result.event_date).toBeDefined();
  });

  it('should detect gluten as dietary restriction', async () => {
    const bundle = {
      authData: {api_key: 'secret'},
      inputData: {body: 'Gluten-free dinner included.'}
    };
    const result = await appTester(App.creates.extract_guest_info.operation.perform, bundle);
    expect(result.dietary_restrictions).toContain('Gluten-free');
  });
});