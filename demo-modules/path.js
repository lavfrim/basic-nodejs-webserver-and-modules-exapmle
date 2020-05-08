const path = require('path');

console.log('-- File name:', path.basename(__filename));
console.log('-- DIR name:', path.dirname(__filename));
console.log('-- File extantion', path.extname(__filename));
console.log('-- -- --');
console.log('-- Parse', path.parse(__filename));
console.log('-- Join (constract new path)', path.join(__dirname, 'server', 'index.html'));