const zapier = require('zapier-platform-core');
const App = require('../index');

const { email_invitation } = App.triggers;
const { extract_guest_info, create_danish_menu, schedule_prep_timeline } = App.actions;

describe('Email-Based Dinner Party Planner', () => {
  describe('Trigger: email_invitation', () => {
    it('should trigger with correct subject filtered', async () => {
      // Mock z.request for Gmail API
      const z = {
        request: jest.fn()
          .mockResolvedValueOnce({
            data: {
              messages: [
                { id: 'abc123' }
              ]
            }
          })
          .mockResolvedValueOnce({
            data: {
              threadId: 'xyz789',
              payload: {
                headers: [
                  { name: 'Subject', value: 'Dinner Party Invitation' }
                ],
                parts: [
                  {
                    body: { data: Buffer.from('Dear guest, see you at my place!').toString('base64') }
                  }
                ]
              },
              snippet: 'You\'re invited!'
            }
          })
      };

      const bundle = {
        authData: {
          access_token: 'test_token'
        }
      };

      const results = await email_invitation.operation.perform(z, bundle);

      expect(Array.isArray(results)).toBe(true);
      expect(results[0].id).toBe('abc123');
      expect(results[0].subject.toLowerCase()).toContain('dinner party');
      expect(results[0].body).toContain('Dear guest');
    });
  });

  describe('Action: extract_guest_info', () => {
    it('should extract guest info from email body', async () => {
      const z = {};
      const bundle = {
        inputData: {
          body: 'Anna Nielsen, Peter Sørensen are invited. Anna is vegetarian, Peter is gluten-free. See you 2024-09-15!'
        }
      };
      const result = await extract_guest_info.operation.perform(z, bundle);
      expect(result).toHaveProperty('guest_names');
      expect(result).toHaveProperty('dietary_restrictions');
      expect(result).toHaveProperty('event_date');
      expect(result.guest_names).toContain('Anna Nielsen');
      expect(result.dietary_restrictions).toContain('vegetarian');
    });
  });

  describe('Action: create_danish_menu', () => {
    it('should generate menu accommodating dietary restrictions', async () => {
      const z = {};
      const bundle = {
        inputData: {
          guest_names: ['Anna Nielsen', 'Peter Sørensen'],
          dietary_restrictions: ['vegetarian', 'gluten-free'],
          event_date: '2024-09-15'
        }
      };
      const result = await create_danish_menu.operation.perform(z, bundle);
      expect(Array.isArray(result.menu)).toBe(true);
      expect(result.shopping_list).toContain('Rugbrød');
      expect(result.event_date).toBe('2024-09-15');
      expect(result.notes).toMatch(/Aarhus/);
    });
  });

  describe('Action: schedule_prep_timeline', () => {
    it('should create timeline and reminders properly', async () => {
      const z = {};
      const bundle = {
        inputData: {
          event_date: '2024-09-15',
          menu: ['Starter-Rugbrød med røget laks og urter', 'Main-Frikadeller med rodfrugter', 'Dessert-Æblekage med hasselnødder']
        }
      };
      const result = await schedule_prep_timeline.operation.perform(z, bundle);
      expect(Array.isArray(result.timeline)).toBe(true);
      expect(result.timeline.length).toBeGreaterThan(0);
      expect(result.reminders[0]).toHaveProperty('date');
      expect(result.reminders[1].message).toMatch(/Guests arrive at 18:00/);
      expect(result.event_date).toBe('2024-09-15');
    });
  });
});