// Basic arrow function
const add = (a, b) => a + b;
console.log("Addition:", add(2, 3)); // Output: 5

// Arrow function with a single parameter (no parentheses needed)
const square = x => x * x;
console.log("Square:", square(4)); // Output: 16

// Arrow function with multiple lines (using curly braces and return)
const greet = (name) => {
    const greeting = `Hello, ${name}!`;
    return greeting;
};
console.log("Greet:", greet("Keyur")); // Output: Hello, Keyur!



// `this` context with traditional function vs. arrow function
function Person(name) {
    this.name = name;

    // Traditional function (loses `this` context)
    this.sayHelloTraditional = function () {
        setTimeout(function () {
            console.log("Traditional: Hello, my name is " + this.name); // undefined
        }, 1000);
    };

    // Arrow function (inherits `this` context)
    this.sayHelloArrow = function () {
        setTimeout(() => {
            console.log("Arrow: Hello, my name is " + this.name); // Correctly refers to Person instance
        }, 1000);
    };
}

const person = new Person("Keyur");
person.sayHelloTraditional(); // Output: "Hello, my name is undefined"
person.sayHelloArrow(); // Output: "Hello, my name is Keyur"