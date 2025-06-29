// actions/guest_analysis.js

const sample = {
  insights: [
    "Bjorn Berg prefers smørrebrød.",
    "Alice Andersen avoids shellfish."
  ],
  summary: "2 guests analyzed, 1 vegetarian, no severe allergies."
};

const perform = async (z, bundle) => {
  // Simulate an AI classifier
  const { guest_names, dietary_restrictions } = bundle.inputData;
  const insights = [];
  if (guest_names && guest_names.includes('Bjorn Berg')) {
    insights.push('Bjorn Berg prefers smørrebrød.');
  }
  if (dietary_restrictions && dietary_restrictions.includes('Vegetarian')) {
    insights.push('Someone is vegetarian.');
  }
  return {
    insights,
    summary: `${guest_names.length} guests analyzed, ${dietary_restrictions.length} dietary restrictions.`
  };
};

module.exports = {
  key: 'guest_analysis',
  noun: 'GuestAnalysis',
  display: {
    label: 'Analyze Guests (AI)',
    description: 'Classifies guests for preferences, restrictions, and cultural fit using AI.'
  },
  operation: {
    inputFields: [
      {key: 'guest_names', required: true, type: 'string', list: true, label: 'Guest Names'},
      {key: 'dietary_restrictions', required: true, type: 'string', list: true, label: 'Dietary Restrictions'}
    ],
    perform,
    sample,
    outputFields: [
      {key: 'insights[]', label: 'Guest Insights'},
      {key: 'summary', label: 'Summary'}
    ]
  }
};