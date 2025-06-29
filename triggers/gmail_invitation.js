// triggers/gmail_invitation.js

const sample = {
  id: 'abc123',
  subject: 'Dinner Party Invitation!',
  from: 'host@example.com',
  body: 'You are invited to a Danish dinner party at 20:00 on Friday!',
  date: '2024-06-07T15:46:00Z'
};

const perform = async (z, bundle) => {
  // Simulate Gmail search via API, filtering on subject
  const fakeGmails = [
    sample,
    {
      id: 'abc124',
      subject: 'Invoice',
      from: 'someone@example.com',
      body: 'Here is your invoice',
      date: '2024-06-01T13:00:00Z'
    }
  ];
  // Only dinner party invitations
  return fakeGmails.filter(email =>
    /dinner party invitation/i.test(email.subject)
  );
};

module.exports = {
  key: 'gmail_invitation',
  noun: 'Email',
  display: {
    label: 'New Dinner Party Invitation Email (Gmail)',
    description: 'Triggers when a Gmail email with subject containing "dinner party invitation" is found.'
  },
  operation: {
    perform,
    sample,
    outputFields: [
      {key: 'id', label: 'Email ID'},
      {key: 'subject', label: 'Subject'},
      {key: 'from', label: 'From'},
      {key: 'body', label: 'Body'},
      {key: 'date', label: 'Date'}
    ]
  }
};