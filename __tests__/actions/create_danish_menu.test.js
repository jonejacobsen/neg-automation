====================================
jest.mock('axios');
const axios = require('axios');
const createDanishMenu = require('../../actions/create_danish_menu');

describe('create_danish_menu action', () => {
  beforeEach(() => {
    axios.post.mockReset();
  });

  it('has correct key and display', () => {
    expect(createDanishMenu.key).toBe('create_danish_menu');
    expect(createDanishMenu.display.label).toContain('Danish Menu');
  });

  it('calls AI generator with correct context', async () => {
    const menu = [
      'Smørrebrød (Open-faced sandwiches)',
      'Frikadeller (Danish meatballs)'
    ];
    axios.post.mockResolvedValue({ data: { menu } });
    const z = {};
    const bundle = {};

    const out = await createDanishMenu.operation.perform(z, bundle);
    expect(axios.post).toHaveBeenCalledWith(
      expect.stringContaining('generate-menu'),
      expect.objectContaining({ context: expect.stringContaining('Danish cuisine') })
    );
    expect(out.menu).toEqual(menu);
  });

  it('returns sample shape', () => {
    expect(Array.isArray(createDanishMenu.operation.sample.menu)).toBe(true);
  });
});
```

```plaintext
====================================