const testAuth = async (z, bundle) => {
  // Perform a simple Gmail profile call to verify the token.
  const resp = await z.request({
    url: 'https://gmail.googleapis.com/gmail/v1/users/me/profile',
    headers: {
      Authorization: `Bearer ${bundle.authData.access_token}`,
    },
  });

  if (resp.status !== 200) {
    throw new Error('Invalid Gmail credentials');
  }
  return resp.data;
};

module.exports = {
  type: 'oauth2',
  oauth2Config: {
    authorizeUrl: {
      url: 'https://accounts.google.com/o/oauth2/v2/auth',
      params: {
        client_id: '{{process.env.GMAIL_CLIENT_ID}}',
        response_type: 'code',
        scope: 'https://mail.google.com/',
        redirect_uri: '{{redirect_uri}}',
        access_type: 'offline',
        prompt: 'consent',
      },
    },
    getAccessToken: {
      url: 'https://oauth2.googleapis.com/token',
      body: {
        client_id: '{{process.env.GMAIL_CLIENT_ID}}',
        client_secret: '{{process.env.GMAIL_CLIENT_SECRET}}',
        code: '{{bundle.inputData.code}}',
        grant_type: 'authorization_code',
        redirect_uri: '{{redirect_uri}}',
      },
      method: 'POST',
    },
    refreshAccessToken: {
      url: 'https://oauth2.googleapis.com/token',
      body: {
        client_id: '{{process.env.GMAIL_CLIENT_ID}}',
        client_secret: '{{process.env.GMAIL_CLIENT_SECRET}}',
        refresh_token: '{{bundle.authData.refresh_token}}',
        grant_type: 'refresh_token',
      },
      method: 'POST',
    },
    autoRefresh: true,
  },
  test: testAuth,
  connectionLabel: '{{bundle.authData.emailAddress}}',
};
