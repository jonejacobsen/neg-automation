// Simulate use of an AI parser to extract info from an email
const perform = async (z, bundle) => {
  const { body } = bundle.inputData;
  // Simulate AI extraction
  return {
    guest_names: ['Anna Nielsen', 'Peter Sørensen'],
    dietary_restrictions: ['vegetarian', 'gluten-free'],
    event_date: '2024-09-15'
  };
};

module.exports = {
  key: 'extract_guest_info',
  noun: 'Extracted Guest Info',
  display: {
    label: 'Extract Guest Info',
    description: 'Extracts guest names, dietary restrictions, and event date from an invitation email using AI.'
  },
  operation: {
    inputFields: [
      { key: 'body', type: 'string', required: true, label: 'Email Body' }
    ],
    outputFields: [
      { key: 'guest_names[]', type: 'string', label: 'Guest Names' },
      { key: 'dietary_restrictions[]', type: 'string', label: 'Dietary Restrictions' },
      { key: 'event_date', type: 'string', label: 'Event Date' }
    ],
    perform,
    sample: {
      guest_names: ['Anna Nielsen', 'Peter Sørensen'],
      dietary_restrictions: ['vegetarian', 'gluten-free'],
      event_date: '2024-09-15'
    }
  }
};
```

```plaintext
#