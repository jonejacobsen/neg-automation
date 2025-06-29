// actions/create_danish_menu.js
//
// Version 1: mock AI logic that proposes a Danish three-course menu,
// returns a shopping list, and notes on Aarhus availability.
// Replace the hard-coded array later with an OpenAI call.

const perform = async (z, bundle) => {
  const {
    guest_names = [],
    dietary_restrictions = [],
    event_date,
  } = bundle.inputData;

  const isVegan = dietary_restrictions.includes('vegan');
  const isVegetarian = dietary_restrictions.includes('vegetarian');

  const menu = [
    {
      course: 'Starter',
      dish:
        'Rugbrød med røget laks og urter (Danish rye bread with smoked salmon and herbs)',
      dietary_compatible: !isVegan,
    },
    {
      course: 'Main',
      dish:
        'Frikadeller med rodfrugter (Danish meatballs with root vegetables)',
      dietary_compatible: !isVegetarian,
    },
    {
      course: 'Dessert',
      dish: 'Æblekage med hasselnødder (Danish apple cake with hazelnuts)',
      dietary_compatible: true,
    },
  ];

  const shopping_list = [
    'Rugbrød',
    'Røget laks',
    'Blandet urter',
    'Hakket oksekød',
    'Rodfrugter',
    'Æbler',
    'Hasselnødder',
  ];

  return {
    menu,
    shopping_list,
    event_date,
    notes:
      'All ingredients available at Føtex or SuperBrugsen in Aarhus. Adjusted for dietary restrictions.',
  };
};

module.exports = {
  key: 'create_danish_menu',
  noun: 'Danish Menu',
  display: {
    label: 'Create Danish Menu',
    description:
      'Generates a seasonal Danish dinner menu that respects dietary restrictions, optimised for Aarhus retailers.',
  },
  operation: {
    inputFields: [
      {
        key: 'guest_names',
        label: 'Guest Names',
        type: 'string',
        list: true,
        required: true,
      },
      {
        key: 'dietary_restrictions',
        label: 'Dietary Restrictions',
        type: 'string',
        list: true,
        required: true,
      },
      { key: 'event_date', label: 'Event Date', type: 'string', required: true },
    ],
    perform,
    sample: {
      menu: [
        {
          course: 'Starter',
          dish:
            'Rugbrød med røget laks og urter (Danish rye bread with smoked salmon and herbs)',
          dietary_compatible: true,
        },
        {
          course: 'Main',
          dish:
            'Frikadeller med rodfrugter (Danish meatballs with root vegetables)',
          dietary_compatible: false,
        },
        {
          course: 'Dessert',
          dish: 'Æblekage med hasselnødder (Danish apple cake with hazelnuts)',
          dietary_compatible: true,
        },
      ],
      shopping_list: [
        'Rugbrød',
        'Røget laks',
        'Blandet urter',
        'Hakket oksekød',
        'Rodfrugter',
        'Æbler',
        'Hasselnødder',
      ],
      event_date: '2024-09-15',
      notes:
        'All ingredients available at Føtex or SuperBrugsen in Aarhus. Adjusted for dietary restrictions.',
    },
    outputFields: [
      { key: 'menu[]course', label: 'Course' },
      { key: 'menu[]dish', label: 'Dish' },
      {
        key: 'menu[]dietary_compatible',
        type: 'boolean',
        label: 'Dietary Compatible',
      },
      { key: 'shopping_list[]', label: 'Shopping List Item' },
      { key: 'event_date', label: 'Event Date' },
      { key: 'notes', label: 'Notes' },
    ],
  },
};
