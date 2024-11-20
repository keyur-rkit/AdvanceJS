class Animal {
    makeSound() {
        console.log("Generic animal sound");
    }
}

class Dog extends Animal {
    // overriding method
    makeSound() {
        console.log("Woof!");
    }
}

const animal = new Animal();
animal.makeSound(); // Outputs: "Generic animal sound"

const dog = new Dog();
dog.makeSound(); // Outputs: "Woof!"