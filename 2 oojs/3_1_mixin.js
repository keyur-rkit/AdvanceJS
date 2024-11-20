const Run = {
    run() {
        console.log(`${this.name} is running!`);
    }
};

const Walk = {
    walk() {
        console.log(`${this.name} is walking!`);
    }
};

class Human {
    constructor (name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} is speaking!`);
    }
}


// Mixing in the functionalities
Object.assign(Human.prototype, Run, Walk);

const keyur = new Human('Keyur');
keyur.walk();
keyur.run();
keyur.speak();