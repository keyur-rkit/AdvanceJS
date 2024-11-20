// Example with var
function varExample() {
    if (true) {
        var x = 10;
    }
    console.log("var x (inside function but outside block):", x); // accessible outside the if block
}
varExample();

var y = 5;
var y = 10; // Re-declaration is allowed with var
console.log("var y (re-declared):", y); 

// Example with let
function letExample() {
    if (true) {
        let z = 20;
        console.log("let z (inside block):", z); 
    }
    // console.log(z); // Error: z is not defined (block-scoped)
}
letExample();

let a = 5;
// let a = 10; // Error: Identifier 'a' has already been declared
a = 15; // Reassignment is allowed
console.log("let a (reassigned):", a); 

// Example with const
const b = 30;
// const b = 40; // Error: Identifier 'b' has already been declared
// b = 50; // Error: Assignment to constant variable
