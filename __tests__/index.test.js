jest.mock('../package.json', () => ({
  version: '1.0.0'
}));

describe('index exports', () => {
  const app = require('../index.js');
  const manualTrigger = require('../triggers/manual_trigger');

  test('should export version', () => {
    expect(app.version).toBe('1.0.0');
  });

  test('should export platformVersion', () => {
    expect(app.platformVersion).toBeDefined();
    expect(typeof app.platformVersion).toBe('string');
  });

  test('should register the manual trigger', () => {
    expect(app.triggers[manualTrigger.key]).toBe(manualTrigger);
  });
});