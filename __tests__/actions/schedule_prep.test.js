====================================
const schedulePrep = require('../../actions/schedule_prep');

describe('schedule_prep action', () => {
  it('has correct key and display', () => {
    expect(schedulePrep.key).toBe('schedule_prep');
    expect(schedulePrep.display.label).toContain('Preparation');
  });

  it('returns correct event structure', async () => {
    const z = {};
    const bundle = {
      inputData: {
        event_title: 'Begin Preparation',
        event_datetime: '2024-06-13T15:00:00+02:00',
        calendar_id: 'primary'
      }
    };

    const event = await schedulePrep.operation.perform(z, bundle);

    expect(event).toHaveProperty('id');
    expect(event.title).toBe('Begin Preparation');
    expect(event.dateTime).toBe('2024-06-13T15:00:00+02:00');
    expect(event.calendarId).toBe('primary');
  });

  it('returns sample shape', () => {
    const s = schedulePrep.operation.sample;
    expect(s).toHaveProperty('id');
    expect(s).toHaveProperty('title');
    expect(s).toHaveProperty('dateTime');
    expect(s).toHaveProperty('calendarId');
  });
});