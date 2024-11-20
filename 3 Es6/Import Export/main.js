// Importing named exports and the default export
import PI, { add, subtract } from './math.js';

console.log(add(10, 5));        // Output: 15
console.log(subtract(10, 5));   // Output: 5
console.log(`Value of PI: ${PI}`); // Output: Value of PI: 3.14159
