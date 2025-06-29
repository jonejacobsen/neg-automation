const zapier = require('zapier-platform-core');
const App = require('../index');

zapier.tools.env.inject(); // Support for environment variables, if needed.

describe('hello_world trigger', () => {
  it('should return the hello world message in correct structure', async () => {
    const bundle = {};
    const results = await App.triggers.hello_world.operation.perform(zapier, bundle);
    expect(Array.isArray(results)).toBe(true);
    expect(results.length).toBe(1);

    const [item] = results;
    expect(item).toHaveProperty('id', 1);
    expect(item).toHaveProperty('message', 'Hello, world!');
  });

  it('should match the outputFields schema', async () => {
    const bundle = {};
    const results = await App.triggers.hello_world.operation.perform(zapier, bundle);
    const outputFields = App.triggers.hello_world.operation.outputFields;
    const [item] = results;

    outputFields.forEach(field => {
      expect(item).toHaveProperty(field.key);
      if (field.key === 'id') {
        expect(typeof item[field.key]).toBe('number');
      }
      if (field.key === 'message') {
        expect(typeof item[field.key]).toBe('string');
      }
    });
  });

  it('sample should match perform result structure', () => {
    const sample = App.triggers.hello_world.operation.sample;
    expect(sample).toHaveProperty('id', 1);
    expect(sample).toHaveProperty('message', 'Hello, world!');
  });
});
```

```plaintext
//