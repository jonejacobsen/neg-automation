// actions/extract_guest_info.js

const sample = {
  guest_names: ['Alice Andersen', 'Bjorn Berg'],
  dietary_restrictions: ['Vegetarian'],
  event_date: '2024-06-07'
};

const perform = async (z, bundle) => {
  // Simulate an AI parser extracting guest info from email body
  const { body } = bundle.inputData;
  // For demo: parse "You are invited to a Danish dinner party at 20:00 on Friday!"
  let guest_names = ['Alice Andersen', 'Bjorn Berg'];
  let dietary_restrictions = ['Vegetarian'];
  let event_date = '2024-06-07';

  if (body && /gluten/i.test(body)) dietary_restrictions.push('Gluten-free');
  return {
    guest_names,
    dietary_restrictions,
    event_date
  };
};

module.exports = {
  key: 'extract_guest_info',
  noun: 'GuestInfo',
  display: {
    label: 'Extract Guest Info (AI)',
    description: 'Extracts guest names, dietary restrictions, and event date from invitation using AI parsing.'
  },
  operation: {
    inputFields: [
      {key: 'body', required: true, type: 'text', label: 'Email Body'}
    ],
    perform,
    sample,
    outputFields: [
      {key: 'guest_names[]', label: 'Guest Names'},
      {key: 'dietary_restrictions[]', label: 'Dietary Restrictions'},
      {key: 'event_date', label: 'Event Date'}
    ]
  }
};