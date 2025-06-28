module.exports = {
  key: 'manual_trigger',
  noun: 'Test',
  display: {
    label: 'Manual Test Trigger',
    description: 'A manual trigger for testing after branch cleanup.',
    important: true,
  },

  operation: {
    perform: async (z, bundle) => {
      // Returns a static test provided object
      return [
        {
          id: 1,
          message: 'Branch cleanup test succeeded.',
          timestamp: new Date().toISOString(),
        },
      ];
    },
    // No inputFields
    sample: {
      id: 1,
      message: 'Branch cleanup test succeeded.',
      timestamp: '2024-01-01T00:00:00.000Z'
    },
    outputFields: [
      { key: 'id', label: 'ID', type: 'integer' },
      { key: 'message', label: 'Message', type: 'string' },
      { key: 'timestamp', label: 'Timestamp', type: 'string' },
    ],
  },
};
```

```plaintext
#