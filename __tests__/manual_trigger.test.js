const manualTrigger = require('../triggers/manual_trigger');

describe('manualTrigger', () => {
  test('should have correct key and noun', () => {
    expect(manualTrigger.key).toBe('manual_trigger');
    expect(manualTrigger.noun).toBe('Test');
  });

  test('should expose correct display information', () => {
    expect(manualTrigger.display.label).toBe('Manual Test Trigger');
    expect(manualTrigger.display.description).toMatch(/manual trigger/i);
    expect(manualTrigger.display.important).toBe(true);
  });

  test('should provide correct sample', () => {
    const sample = manualTrigger.operation.sample;
    expect(sample).toEqual({
      id: 1,
      message: 'Branch cleanup test succeeded.',
      timestamp: '2024-01-01T00:00:00.000Z'
    });
  });

  test('should define correct outputFields', () => {
    expect(manualTrigger.operation.outputFields).toEqual([
      { key: 'id', label: 'ID', type: 'integer' },
      { key: 'message', label: 'Message', type: 'string' },
      { key: 'timestamp', label: 'Timestamp', type: 'string' },
    ]);
  });

  test('perform should return array with correct structure', async () => {
    const z = {};
    const bundle = {};
    const result = await manualTrigger.operation.perform(z, bundle);
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(1);

    const item = result[0];
    expect(item).toHaveProperty('id', 1);
    expect(item).toHaveProperty('message', 'Branch cleanup test succeeded.');
    expect(item).toHaveProperty('timestamp');
    // timestamp should be ISO string
    const d = new Date(item.timestamp);
    expect(typeof d.toISOString()).toBe('string');
    // Should be close to "now"
    const now = Date.now();
    const ts = Date.parse(item.timestamp);
    expect(Math.abs(ts - now)).toBeLessThan(1000 * 5); // within 5 seconds
  });
});
```

```plaintext
#