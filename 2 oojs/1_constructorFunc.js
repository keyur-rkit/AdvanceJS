//constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}
// adding function to prototype
Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name}.`);
};
const person1 = new Person('Keyur', 20);
person1.greet();
