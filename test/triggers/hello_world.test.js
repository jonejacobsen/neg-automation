const zapier = require('zapier-platform-core');
const app = require('../../index');

describe('hello_world trigger', () => {
  it('returns "Hello, world!" message', async () => {
    const bundle = {};
    const results = await app.triggers.hello_world.operation.perform(zapier, bundle);

    expect(Array.isArray(results)).toBe(true);
    expect(results.length).toBe(1);
    expect(results[0]).toHaveProperty('id', '1');
    expect(results[0]).toHaveProperty('message', 'Hello, world!');
  });

  it('has correct sample', () => {
    const sample = app.triggers.hello_world.operation.sample;
    expect(sample).toHaveProperty('id', '1');
    expect(sample).toHaveProperty('message', 'Hello, world!');
  });

  it('has correct output fields', () => {
    const fields = app.triggers.hello_world.operation.outputFields;
    expect(fields).toEqual([
      { key: 'id', label: 'ID' },
      { key: 'message', label: 'Message' }
    ]);
  });

  it('display property is correct', () => {
    const disp = app.triggers.hello_world.display;
    expect(disp.label).toMatch(/Manual Hello World/);
    expect(disp.description).toMatch(/smoke-test/);
  });
});
```

```plaintext
#