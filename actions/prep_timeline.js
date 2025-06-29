// actions/prep_timeline.js

const sample = {
  prep_steps: [
    {time: '2024-06-07T09:00:00Z', step: 'Pick up groceries at SuperBrugsen'},
    {time: '2024-06-07T16:00:00Z', step: 'Prepare appetizers'}
  ],
  timeline_summary: '2 critical steps prepared for the party'
};

const perform = async (z, bundle) => {
  // Simulate calendar-based preparation timeline
  const { event_date } = bundle.inputData;
  return {
    prep_steps: [
      {time: `${event_date}T09:00:00Z`, step: 'Pick up groceries at SuperBrugsen'},
      {time: `${event_date}T16:00:00Z`, step: 'Prepare appetizers'}
    ],
    timeline_summary: '2 critical steps prepared for the party'
  };
};

module.exports = {
  key: 'prep_timeline',
  noun: 'PrepTimeline',
  display: {
    label: 'Generate Preparation Timeline',
    description: 'Creates a timeline of preparation steps for the party using calendar events.'
  },
  operation: {
    inputFields: [
      {key: 'event_date', required: true, type: 'string', label: 'Event Date (YYYY-MM-DD)'}
    ],
    perform,
    sample,
    outputFields: [
      {key: 'prep_steps[]time', label: 'Prep Step Time'},
      {key: 'prep_steps[]step', label: 'Prep Step Description'},
      {key: 'timeline_summary', label: 'Summary'}
    ]
  }
};