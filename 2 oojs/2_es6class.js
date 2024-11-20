class Person {
    // constructor to Initialize 
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // class method
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}
const person1 = new Person('Keyur', 20);
person1.greet();
