// authentication.js
module.exports = {
  type: 'custom',
  test: {
    url: 'https://zapier.com/platform-test/auth',
    method: 'GET'
  },
  fields: [
    { key: 'api_key', type: 'string', required: true, helpText: 'Your API key' }
  ]
};