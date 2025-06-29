module.exports = {
  type: 'custom',
  test: {
    url: 'https://www.googleapis.com/gmail/v1/users/me/profile',
    method: 'GET',
  },
  fields: [
    {
      key: 'access_token',
      label: 'Google Access Token',
      required: true,
      type: 'string',
      helpText: 'OAuth2 token from Gmail via Zapier\'s Google integration.',
    }
  ],
  connectionLabel: '{{bundle.authData.access_token}}'
};
```

```plaintext
#