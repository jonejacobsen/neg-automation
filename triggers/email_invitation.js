const subjectFilter = 'dinner party invitation';

const perform = async (z, bundle) => {
  // Query Gmail API for recent messages with the target subject
  const listResp = await z.request({
    url: 'https://gmail.googleapis.com/gmail/v1/users/me/messages',
    params: {
      q: `subject:"${subjectFilter}"`,
      maxResults: 10,
    },
    headers: {
      Authorization: `Bearer ${bundle.authData.access_token}`,
    },
  });

  const messages = listResp.data.messages ?? [];

  // Fetch each message’s metadata + snippet
  const results = await Promise.all(
    messages.map(async ({ id }) => {
      const msgResp = await z.request({
        url: `https://gmail.googleapis.com/gmail/v1/users/me/messages/${id}`,
        headers: {
          Authorization: `Bearer ${bundle.authData.access_token}`,
        },
      });

      const data = msgResp.data;
      const subjectHeader = data.payload.headers.find(
        (h) => h.name.toLowerCase() === 'subject'
      );

      const bodyPart =
        data.payload.parts?.find((p) => p.mimeType === 'text/plain') ??
        data.payload.parts?.[0];

      const bodyText = bodyPart?.body?.data
        ? Buffer.from(bodyPart.body.data, 'base64').toString('utf8')
        : '';

      return {
        id,
        threadId: data.threadId,
        subject: subjectHeader?.value ?? '',
        snippet: data.snippet,
        body: bodyText,
      };
    })
  );

  return results;
};

module.exports = {
  key: 'email_invitation',
  noun: 'Dinner Party Invitation',
  display: {
    label: 'New Dinner-Party Email Invitation',
    description:
      'Triggers when a new Gmail message with the subject “dinner party invitation” arrives.',
  },
  operation: {
    inputFields: [],
    perform,
    sample: {
      id: '123',
      threadId: '456',
      subject: 'Dinner Party Invitation',
      snippet: "You're invited!",
      body: 'Dear friend, you are invited to a dinner party...',
    },
  },
};
