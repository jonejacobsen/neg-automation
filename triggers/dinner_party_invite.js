====================================
/**
 * Trigger: Gmail new email matching filter "subject:dinner party invitation"
 */
const GMAIL_API = 'https://gmail.googleapis.com/gmail/v1/users/me/messages';

const getNewestDinnerPartyInvitations = async (z, bundle) => {
  const res = await z.request({
    method: 'GET',
    url: GMAIL_API,
    params: {
      q: 'subject:"dinner party invitation"',
      maxResults: 10,
    },
    headers: {
      Authorization: `Bearer ${process.env.GMAIL_ACCESS_TOKEN || bundle.authData.access_token}`,
      Accept: 'application/json'
    }
  });

  const messages = res.data && res.data.messages ? res.data.messages : [];
  // fetch full details for each message
  return await Promise.all(messages.map(async (msg) => {
    const detailsRes = await z.request({
      method: 'GET',
      url: `${GMAIL_API}/${msg.id}`,
      headers: {
        Authorization: `Bearer ${process.env.GMAIL_ACCESS_TOKEN || bundle.authData.access_token}`,
        Accept: 'application/json'
      }
    });
    // extract relevant data: subject, from, snippet, etc.
    const headers = detailsRes.data.payload.headers.reduce((acc, h) => { acc[h.name] = h.value; return acc; }, {});
    return {
      id: detailsRes.data.id,
      threadId: detailsRes.data.threadId,
      subject: headers.Subject,
      from: headers.From,
      date: headers.Date,
      snippet: detailsRes.data.snippet,
      body: detailsRes.data.snippet, // Gmail API returns snippet by default
    };
  }));
};

module.exports = {
  key: 'dinner_party_invite',
  noun: 'Dinner Party Invitation Email',
  display: {
    label: 'New Dinner Party Invitation Email',
    description: 'Triggers when a new email is received with subject: dinner party invitation.',
  },
  operation: {
    type: 'polling',
    perform: getNewestDinnerPartyInvitations,
    sample: {
      id: '12345',
      threadId: '54321',
      subject: 'Dinner Party Invitation',
      from: 'host@example.com',
      date: 'Thu, 13 Jun 2024 18:30:00 +0200',
      snippet: 'You are invited to a Danish dinner party in Aarhus!',
      body: 'You are invited to a Danish dinner party in Aarhus!',
    },
    outputFields: [
      { key: 'id', label: 'ID' },
      { key: 'threadId', label: 'Thread ID' },
      { key: 'subject', label: 'Subject' },
      { key: 'from', label: 'From' },
      { key: 'date', label: 'Date' },
      { key: 'snippet', label: 'Snippet' },
      { key: 'body', label: 'Body' },
    ],
  },
};
```

```plaintext
====================================