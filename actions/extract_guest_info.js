====================================
/**
 * Action: extract_guest_info (AI Parser)
 * Parses the body of a dinner party invitation email to extract guest names/emails/etc.
 */
const axios = require('axios');

const perform = async (z, bundle) => {
  const body = bundle.inputData.body;

  // Simulate an AI parser call (for real-world, replace with OpenAI, Azure, etc.)
  // Here, we expect the AI will return a guests array and maybe other info
  const aiRes = await axios.post('https://api.fakeaiparser.com/extract-guests', {
    input: body,
    context: 'Extract guest names and emails from a Danish dinner party invitation email.'
  });

  return aiRes.data;
};

module.exports = {
  key: 'extract_guest_info',
  noun: 'Guest Information',
  display: {
    label: 'Extract Guest Info',
    description: 'Extracts guest information from an invitation email using AI.',
  },
  operation: {
    inputFields: [
      { key: 'body', required: true, type: 'string', label: 'Email Body' },
    ],
    perform,
    sample: {
      guests: [
        { name: 'Anna Nielsen', email: 'anna@email.dk' },
        { name: 'Bjorn Sørensen', email: 'bjorn@email.dk' }
      ]
    },
    outputFields: [
      { key: 'guests[]name', label: 'Guest Name' },
      { key: 'guests[]email', label: 'Guest Email' }
    ],
  },
};
```

```plaintext
====================================