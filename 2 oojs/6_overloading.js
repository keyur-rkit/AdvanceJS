// function add(a, b) {
//     console.log(a + b);
// }

// function add(x, y, z) {
//     console.log(z);
//     console.log(x + y + z);
// }

// // not natively support function overloading
// add(3, 4); // NaN , call second function and take z as undefined 




// //simple overloading using Default Parameters

// function add(x,y,z=0){
//     console.log(x+y+z);
// }

// add(3,4);





// // //checking Argument Length and Type

// function add(a, b) {
//     if (typeof b === 'undefined') {
//         // Single argument case
//         return a + 0;
//     } else {
//         // Two argument case
//         return a + b;
//     }
// }

// console.log(add(5)); // Outputs 5
// console.log(add(5, 10)); // Outputs 15
