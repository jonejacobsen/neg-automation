// Simulate timeline creation and reminders scheduling, considering Nordic culture punctuality
const perform = async (z, bundle) => {
  const { event_date, menu } = bundle.inputData;
  // Timeline is mock-generated in this example
  return {
    timeline: [
      { time: '2024-09-14T18:00:00+02:00', task: 'Buy groceries at Føtex' },
      { time: '2024-09-15T12:00:00+02:00', task: 'Start prepping vegetables' },
      { time: '2024-09-15T16:00:00+02:00', task: 'Cook main and dessert' },
      { time: '2024-09-15T17:30:00+02:00', task: 'Set the table and chill drinks' }
    ],
    reminders: [
      { date: '2024-09-14', message: 'Remember to go grocery shopping for dinner party.' },
      { date: '2024-09-15', message: 'Start dinner party meal prep this afternoon. Guests arrive at 18:00.' }
    ],
    event_date,
    notes: 'Timeline optimized for prompt Nordic dinner parties. Reminders sent via associated calendar/email.'
  };
};

module.exports = {
  key: 'schedule_prep_timeline',
  noun: 'Prep Timeline',
  display: {
    label: 'Schedule Prep Timeline',
    description: 'Creates a preparation and reminder timeline for the dinner party, optimized for Nordic culture.'
  },
  operation: {
    inputFields: [
      { key: 'event_date', type: 'string', required: true, label: 'Event Date' },
      { key: 'menu', type: 'string', required: true, list: true, label: 'Menu (Course/Dish)' }
    ],
    outputFields: [
      { key: 'timeline[]time', label: 'Timeline Task DateTime' },
      { key: 'timeline[]task', label: 'Task' },
      { key: 'reminders[]date', label: 'Reminder Date' },
      { key: 'reminders[]message', label: 'Reminder Message' },
      { key: 'event_date', label: 'Event Date' },
      { key: 'notes', label: 'Notes' }
    ],
    perform,
    sample: {
      timeline: [
        { time: '2024-09-14T18:00:00+02:00', task: 'Buy groceries at Føtex' },
        { time: '2024-09-15T12:00:00+02:00', task: 'Start prepping vegetables' },
        { time: '2024-09-15T16:00:00+02:00', task: 'Cook main and dessert' },
        { time: '2024-09-15T17:30:00+02:00', task: 'Set the table and chill drinks' }
      ],
      reminders: [
        { date: '2024-09-14', message: 'Remember to go grocery shopping for dinner party.' },
        { date: '2024-09-15', message: 'Start dinner party meal prep this afternoon. Guests arrive at 18:00.' }
      ],
      event_date: '2024-09-15',
      notes: 'Timeline optimized for prompt Nordic dinner parties. Reminders sent via associated calendar/email.'
    }
  }
};
```

```plaintext
#