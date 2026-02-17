const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');

test('package.json is valid', () => {
  const pkg = require('../package.json');
  expect(pkg.name).toBeDefined();
  expect(pkg.version).toBeDefined();
});

test('tsconfig exists', () => {
  expect(fs.existsSync(path.join(root, 'tsconfig.json'))).toBe(true);
});

test('app directory exists', () => {
  expect(fs.existsSync(path.join(root, 'app'))).toBe(true);
});

test('readme exists and is not empty', () => {
  const readme = path.join(root, 'README.md');
  expect(fs.existsSync(readme)).toBe(true);
  const content = fs.readFileSync(readme, 'utf8');
  expect(content.length).toBeGreaterThan(100);
});
