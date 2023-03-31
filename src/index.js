const pkg = require('../package.json');

console.log('1. ARS v%s', pkg.version);
console.log('2. pass env %s', process.env.TEST_ARS);
