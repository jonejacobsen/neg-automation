module.exports = {
  key: 'hello_world',
  noun: 'Hello World',
  display: {
    label: 'Manual Hello World',
    description:
      'A simple smoke-test manual trigger that returns “Hello, world!”',
  },
  operation: {
    perform: async () => {
      return [
        {
          id: '1',
          message: 'Hello, world!',
        },
      ];
    },
    sample: {
      id: '1',
      message: 'Hello, world!',
    },
    outputFields: [
      { key: 'id', label: 'ID' },
      { key: 'message', label: 'Message' },
    ],
  },
};
