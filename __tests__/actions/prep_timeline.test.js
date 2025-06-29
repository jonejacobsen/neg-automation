// __tests__/actions/prep_timeline.test.js

const zapier = require('zapier-platform-core');
const App = require('../../index');
const appTester = zapier.createAppTester(App);

describe('Action - Prep Timeline', () => {
  it('should generate a preparation timeline based on event date', async () => {
    const event_date = '2024-06-07';
    const bundle = {
      authData: {api_key: 'secret'},
      inputData: {event_date}
    };
    const result = await appTester(App.creates.prep_timeline.operation.perform, bundle);
    expect(Array.isArray(result.prep_steps)).toBe(true);
    expect(result.prep_steps[0].time).toContain(event_date);
    expect(result.timeline_summary).toMatch(/critical/);
  });
});