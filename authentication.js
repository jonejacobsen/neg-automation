====================================
module.exports = {
  type: 'custom',
  test: {
    async perform(z, bundle) {
      // Dummy test always returns success for this example
      return { valid: true };
    }
  },
  fields: [],
};
```

```plaintext
====================================