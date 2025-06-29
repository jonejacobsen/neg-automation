====================================
/**
 * Action: schedule_prep (Calendar)
 * Adds a preparation event to the user's calendar for the dinner party.
 */
const perform = async (z, bundle) => {
  // Expect date and optionally additional prep details
  const { event_title, event_datetime, calendar_id } = bundle.inputData;

  // Simulate calendar insert (Google Calendar or similar)
  // In reality, you'd use the relevant API with OAuth
  const id = Math.floor(Math.random() * 1000000).toString();
  return {
    id,
    title: event_title,
    dateTime: event_datetime,
    calendarId: calendar_id
  };
};

module.exports = {
  key: 'schedule_prep',
  noun: 'Preparation Event',
  display: {
    label: 'Schedule Preparation',
    description: 'Schedules a preparation event on your calendar for the dinner party.',
  },
  operation: {
    inputFields: [
      { key: 'event_title', required: true, type: 'string', label: 'Event Title', helpText: 'e.g. "Begin Dinner Preparation"' },
      { key: 'event_datetime', required: true, type: 'datetime', label: 'Event Date and Time' },
      { key: 'calendar_id', required: true, type: 'string', label: 'Calendar ID' }
    ],
    perform,
    sample: {
      id: '67890',
      title: 'Begin Dinner Preparation',
      dateTime: '2024-06-13T15:00:00+02:00',
      calendarId: 'primary'
    },
    outputFields: [
      { key: 'id', label: 'Event ID' },
      { key: 'title', label: 'Event Title' },
      { key: 'dateTime', label: 'Event Date & Time' },
      { key: 'calendarId', label: 'Calendar ID' }
    ]
  }
};
```

```plaintext
====================================