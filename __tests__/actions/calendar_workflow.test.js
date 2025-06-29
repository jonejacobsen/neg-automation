// __tests__/actions/calendar_workflow.test.js

const zapier = require('zapier-platform-core');
const App = require('../../index');
const appTester = zapier.createAppTester(App);

describe('Action - Calendar Workflow', () => {
  it('should return an event with correct details', async () => {
    const bundle = {
      authData: {api_key: 'secret'},
      inputData: {
        event_date: '2024-06-07',
        guest_names: ['Alice Andersen']
      }
    };
    const result = await appTester(App.creates.calendar_workflow.operation.perform, bundle);
    expect(result.event_id).toMatch(/evt_/);
    expect(result.date).toBe('2024-06-07');
    expect(result.status).toBe('Event Created');
  });
});