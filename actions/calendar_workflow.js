// actions/calendar_workflow.js

const sample = {
  event_id: 'evt_1234',
  summary: 'Danish Dinner Party',
  date: '2024-06-07',
  status: 'Event Created'
};

const perform = async (z, bundle) => {
  // Simulate adding events/steps to calendar
  const { event_date, guest_names } = bundle.inputData;
  return {
    event_id: 'evt_1234',
    summary: 'Danish Dinner Party',
    date: event_date,
    status: 'Event Created'
  };
};

module.exports = {
  key: 'calendar_workflow',
  noun: 'CalendarWorkflow',
  display: {
    label: 'Create Calendar Workflow',
    description: 'Creates and links calendar events for the dinner party and custom workflows.'
  },
  operation: {
    inputFields: [
      {key: 'event_date', required: true, type: 'string', label: 'Event Date'},
      {key: 'guest_names', required: false, type: 'string', list: true, label: 'Guest Names'}
    ],
    perform,
    sample,
    outputFields: [
      {key: 'event_id', label: 'Event ID'},
      {key: 'summary', label: 'Event Summary'},
      {key: 'date', label: 'Event Date'},
      {key: 'status', label: 'Status'}
    ]
  }
};