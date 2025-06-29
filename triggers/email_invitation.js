const subjectFilter = 'dinner party invitation';

const perform = async (z, bundle) => {
  // Simulate Gmail API call
  // In production this would use the Gmail API with proper OAuth credentials and parsing
  const response = await z.request({
    url: 'https://www.googleapis.com/gmail/v1/users/me/messages',
    params: {
      q: `subject:${subjectFilter}`,
      maxResults: 10
    },
    headers: {
      Authorization: `Bearer ${bundle.authData.access_token}`
    }
  });
  const messages = response.data.messages || [];
  // For each message, get metadata and snippet for downstream parsing
  // A real Zap would use a "hydrator" for message bodies if needed
  const results = await Promise.all(messages.map(async (msg) => {
    const msgDetails = await z.request({
      url: `https://www.googleapis.com/gmail/v1/users/me/messages/${msg.id}`,
      headers: {
        Authorization: `Bearer ${bundle.authData.access_token}`
      }
    });
    return {
      id: msg.id,
      threadId: msgDetails.data.threadId,
      subject: (msgDetails.data.payload.headers.find(h => h.name.toLowerCase() === 'subject') || {}).value || '',
      snippet: msgDetails.data.snippet,
      body: (msgDetails.data.payload.parts && msgDetails.data.payload.parts[0].body && msgDetails.data.payload.parts[0].body.data) ? Buffer.from(msgDetails.data.payload.parts[0].body.data, 'base64').toString('utf8') : ''
    };
  }));
  return results;
};

module.exports = {
  key: 'email_invitation',
  noun: 'Dinner Party Invitation',
  display: {
    label: 'New Dinner Party Email Invitation',
    description: 'Triggers when a new invitation email with the subject "dinner party invitation" arrives in Gmail.'
  },
  operation: {
    perform,
    inputFields: [],
    sample: {
      id: '123',
      threadId: '456',
      subject: 'Dinner Party Invitation',
      snippet: 'You\'re invited!',
      body: 'Dear friend, you are invited to a dinner party...'
    }
  }
};
```

```plaintext
#