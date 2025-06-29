const zapier = require('zapier-platform-core');
const App = require('../../index');                 // adjust if index.js path differs

const appTester = zapier.createAppTester(App);

describe('hello_world trigger', () => {
  it('returns “Hello, world!” message', async () => {
    const bundle = { authData: {} };

    const results = await appTester(
      App.triggers.hello_world.operation.perform,
      bundle
    );

    expect(Array.isArray(results)).toBe(true);
    expect(results).toHaveLength(1);
    expect(results[0]).toMatchObject({
      id: '1',
      message: 'Hello, world!',
    });
  });

  it('exposes correct sample', () => {
    const sample = App.triggers.hello_world.operation.sample;
    expect(sample).toMatchObject({
      id: '1',
      message: 'Hello, world!',
    });
  });

  it('defines correct output fields', () => {
    const fields = App.triggers.hello_world.operation.outputFields;
    expect(fields).toEqual([
      { key: 'id', label: 'ID' },
      { key: 'message', label: 'Message' },
    ]);
  });

  it('has the right display metadata', () => {
    const disp = App.triggers.hello_world.display;
    expect(disp.label).toMatch(/Manual Hello World/);
    expect(disp.description).toMatch(/smoke-test/i);
  });
});
