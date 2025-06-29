====================================
jest.mock('axios');
const axios = require('axios');
const extractGuestInfo = require('../../actions/extract_guest_info');

describe('extract_guest_info action', () => {
  beforeEach(() => {
    axios.post.mockReset();
  });

  it('has correct key and display', () => {
    expect(extractGuestInfo.key).toBe('extract_guest_info');
    expect(extractGuestInfo.display.label).toContain('Extract Guest Info');
  });

  it('call AI API with correct body', async () => {
    const mockGuests = [
      { name: 'Anna Nielsen', email: 'anna@email.dk' },
      { name: 'Bjorn Sørensen', email: 'bjorn@email.dk' }
    ];
    axios.post.mockResolvedValue({ data: { guests: mockGuests } });

    const bundle = { inputData: { body: "Invitation: Bjorn & Anna <anna@email.dk>" } };
    const z = {};
    const result = await extractGuestInfo.operation.perform(z, bundle);

    expect(axios.post).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({
        input: bundle.inputData.body
      })
    );
    expect(result.guests).toEqual(mockGuests);
  });

  it('returns sample shape', () => {
    expect(extractGuestInfo.operation.sample).toHaveProperty('guests');
    expect(Array.isArray(extractGuestInfo.operation.sample.guests)).toBe(true);
  });
});
```

```plaintext
====================================