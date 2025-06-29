// actions/create_danish_menu.js

const sample = {
  menu: [
    {course: 'Starter', dish: 'Pickled Herring with Rye Bread'},
    {course: 'Main', dish: 'Frikadeller with Roasted Root Vegetables'},
    {course: 'Dessert', dish: 'Rødgrød med Fløde'}
  ],
  store_suggestions: ['Aarhus Fish Market', 'SuperBrugsen']
};

const perform = async (z, bundle) => {
  // Simulating OpenAI/AI content generation based on context
  return {
    menu: [
      {course: 'Starter', dish: 'Pickled Herring with Rye Bread'},
      {course: 'Main', dish: 'Frikadeller with Roasted Root Vegetables'},
      {course: 'Dessert', dish: 'Rødgrød med Fløde'}
    ],
    store_suggestions: ['Aarhus Fish Market', 'SuperBrugsen']
  };
};

module.exports = {
  key: 'create_danish_menu',
  noun: 'Menu',
  display: {
    label: 'Generate Danish Menu (AI)',
    description: 'Creates an optimized Danish menu with seasonal/local context.'
  },
  operation: {
    inputFields: [
      {key: 'context', required: false, type: 'string', label: 'Context'}
    ],
    perform,
    sample,
    outputFields: [
      {key: 'menu[]course', label: 'Menu Course'},
      {key: 'menu[]dish', label: 'Menu Dish'},
      {key: 'store_suggestions[]', label: 'Store Suggestions'}
    ]
  }
};