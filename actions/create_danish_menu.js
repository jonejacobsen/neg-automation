// Simulate AI-powered Danish menu generation
const perform = async (z, bundle) => {
  const { guest_names, dietary_restrictions, event_date } = bundle.inputData;
  // Return an example menu (in real use, would call AI service)
  return {
    menu: [
      {
        course: 'Starter',
        dish: 'Rugbrød med røget laks og urter (Danish rye bread with smoked salmon and herbs)',
        dietary_compatible: !dietary_restrictions.includes('vegan')
      },
      {
        course: 'Main',
        dish: 'Frikadeller med rodfrugter (Danish meatballs with root vegetables)',
        dietary_compatible: !dietary_restrictions.includes('vegetarian')
      },
      {
        course: 'Dessert',
        dish: 'Æblekage med hasselnødder (Danish apple cake with hazelnuts)',
        dietary_compatible: true
      }
    ],
    shopping_list: [
      'Rugbrød',
      'Røget laks',
      'Blandet urter',
      'Hakket oksekød',
      'Rodfrugter',
      'Æbler',
      'Hasselnødder'
    ],
    event_date,
    notes: 'All ingredients available at Føtex, SuperBrugsen in Aarhus. Adjusted for dietary restrictions.'
  };
};

module.exports = {
  key: 'create_danish_menu',
  noun: 'Danish Menu',
  display: {
    label: 'Create Danish Menu',
    description: 'Generates a seasonal Danish dinner menu accommodating dietary restrictions, based on Aarhus local stores.'
  },
  operation: {
    inputFields: [
      { key: 'guest_names', type: 'string', required: true, list: true, label: 'Guest Names' },
      { key: 'dietary_restrictions', type: 'string', required: true, list: true, label: 'Dietary Restrictions' },
      { key: 'event_date', type: 'string', required: true, label: 'Event Date' }
    ],
    outputFields: [
      { key: 'menu[]course', label: 'Course' },
      { key: 'menu[]dish', label: 'Dish' },
      { key: 'menu[]dietary_compatible', type: 'boolean', label: 'Dietary Compatible' },
      { key: 'shopping_list[]', label: 'Shopping List Item' },
      { key: 'event_date', label: 'Event Date' },
      { key: 'notes', label: 'Notes' }
    ],
    perform,
    sample: {
      menu: [
        { course: 'Starter', dish: 'Rugbrød med røget laks og urter', dietary_compatible: true },
        { course: 'Main', dish: 'Frikadeller med rodfrugter', dietary_compatible: false },
        { course: 'Dessert', dish: 'Æblekage med hasselnødder', dietary_compatible: true }
      ],
      shopping_list: ['Rugbrød', 'Røget laks', 'Blandet urter', 'Hakket oksekød', 'Rodfrugter', 'Æbler', 'Hasselnødder'],
      event_date: '2024-09-15',
      notes: 'All ingredients available at Føtex, SuperBrugsen in Aarhus. Adjusted for dietary restrictions.'
    }
  }
};
```

```plaintext
#