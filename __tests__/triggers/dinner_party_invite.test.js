====================================
const dinnerPartyInvite = require('../../triggers/dinner_party_invite');

describe('dinner_party_invite trigger', () => {
  it('has correct key and display', () => {
    expect(dinnerPartyInvite.key).toBe('dinner_party_invite');
    expect(dinnerPartyInvite.display.label).toContain('Dinner Party Invitation');
  });

  it('has proper outputFields', () => {
    const keys = dinnerPartyInvite.operation.outputFields.map(f => f.key);
    expect(keys).toContain('id');
    expect(keys).toContain('subject');
    expect(keys).toContain('body');
  });

  it('returns sample data with correct structure', () => {
    const sample = dinnerPartyInvite.operation.sample;
    expect(typeof sample.id).toBe('string');
    expect(sample.subject).toMatch(/Dinner Party Invitation/);
    expect(typeof sample.body).toBe('string');
    expect(typeof sample.from).toBe('string');
    expect(typeof sample.snippet).toBe('string');
  });
});
```

```plaintext
====================================