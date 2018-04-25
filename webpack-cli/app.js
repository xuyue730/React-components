// es6 module
import sum from './sum';


var minus = require('./minus');

// path.resolve(__dirname,'dist');
// publishPath:'./dist/';

console.log('sum(12,24) = ',sum(23,24));
console.log('minus(24,17) = ',minus(24,17));