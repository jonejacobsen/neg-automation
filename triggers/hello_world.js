module.exports = {
  key: 'hello_world',
  noun: 'Hello World',
  display: {
    label: 'Hello World',
    description: 'A basic trigger that returns a static hello world message.',
    hidden: false,
  },
  operation: {
    type: 'polling', // manual triggers use polling but are manually started
    perform: async (z, bundle) => {
      return [
        {
          id: 1,
          message: 'Hello, world!'
        }
      ];
    },
    sample: {
      id: 1,
      message: 'Hello, world!',
    },
    outputFields: [
      { key: 'id', type: 'integer', label: 'ID' },
      { key: 'message', type: 'string', label: 'Message' },
    ],
  },
};
```

```plaintext
//