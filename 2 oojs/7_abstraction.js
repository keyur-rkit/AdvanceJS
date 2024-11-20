class Run {
    // abstraction by comparing this.constructor
    constructor() {
        if (this.constructor === Run) {
            throw new Error("Abstract class 'Run' cannot be instantiated directly.");
        }
    }

    run() {
        throw new Error("Method 'run()' must be implemented.");
    }
}

class Human extends Run {
    constructor (name){
        super();
        this.name = name;
    }

    run() {
        console.log(`${this.name} is running!`);
    }
}

const keyur = new Human('Keyur');
keyur.run();  


// can't make instance of parent class 
// const keyur = new Run();
// keyur.run();