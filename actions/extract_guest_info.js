// actions/extract_guest_info.js
//
// Purpose ────────────────────────────────────────────────────────────
// Parse the plain-text body of the invitation e-mail and pull out
// • guest names            lines that start with “Guest:”
// • dietary restrictions   lines that start with “Diet:”
//
// In a future iteration you can replace the regex section with an
// OpenAI function-call, but this baseline keeps the bundle runnable
// and testable out of the box.
// ────────────────────────────────────────────────────────────────────

const extractGuestInfo = async (z, bundle) => {
  const { body } = bundle.inputData || {};

  if (!body || typeof body !== 'string') {
    throw new Error('E-mail body (plain text) is required.');
  }

  // Normalise line endings and strip empty lines
  const lines = body
    .replace(/\r\n/g, '\n')
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean);

  const guests = lines
    .filter((l) => l.toLowerCase().startsWith('guest:'))
    .map((l) => l.replace(/^guest:\s*/i, ''));

  const dietary = lines
    .filter((l) => l.toLowerCase().startsWith('diet:'))
    .map((l) => l.replace(/^diet:\s*/i, ''));

  return { guests, dietary };
};

module.exports = {
  key: 'extract_guest_info',
  noun: 'Guest Info',
  display: {
    label: 'Extract Guest Information',
    description:
      'Parses an invitation e-mail and returns guest names and dietary constraints.',
  },
  operation: {
    inputFields: [
      {
        key: 'body',
        label: 'E-mail body (plain text)',
        type: 'text',
        required: true,
      },
    ],
    perform: extractGuestInfo,
    sample: {
      guests: ['Andreas', 'Bastiana'],
      dietary: ['vegetarian', 'gluten-free'],
    },
    outputFields: [
      { key: 'guests[]', label: 'Guest Names' },
      { key: 'dietary[]', label: 'Dietary Notes' },
    ],
  },
};
