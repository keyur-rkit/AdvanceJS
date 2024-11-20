class MathUtility {
    constructor(value1,value2){
        this.value1 = value1;
        this.value2 = value2;
    }

    multiply(){
        return this.value1 * this.value2;
    }


    // Static method to calculate square of a number
    static square(number) {
        return number * number;
    }
}

const math1 = new MathUtility(5,10);
console.log("Class method (only called my object of class) :");
console.log("5 * 10 = " + math1.multiply());


// Accessing static method directly from the class
console.log("Static method (only called by class inself) :");
console.log(MathUtility.square(5));
