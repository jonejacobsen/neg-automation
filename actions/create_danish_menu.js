====================================
/**
 * Action: create_danish_menu (AI Generator)
 * Generates a suggested Danish menu for a dinner party based on context.
 */
const axios = require('axios');

const perform = async (z, bundle) => {
  // We can use the context from config or input, but for this spec it's static
  const context = 'Danish cuisine, Aarhus';

  // Simulate calling an AI generator (e.g. OpenAI API, but we're mocking here)
  const aiRes = await axios.post('https://api.fakeaigenerator.com/generate-menu', {
    context,
    theme: 'danish_dinner_party',
  });

  return aiRes.data;
};

module.exports = {
  key: 'create_danish_menu',
  noun: 'Danish Menu',
  display: {
    label: 'Create Danish Menu',
    description: 'Uses AI to generate a Danish menu suggestion for the dinner party.',
  },
  operation: {
    inputFields: [],
    perform,
    sample: {
      menu: [
        'Smørrebrød (Open-faced sandwiches)',
        'Frikadeller (Danish meatballs)',
        'Rødgrød med fløde (Red berry pudding with cream)'
      ]
    },
    outputFields: [
      { key: 'menu[]', label: 'Menu Item' }
    ],
  },
};
```

```plaintext
====================================