class BankAccount {
    customerName;
    accountNumber;
    // Private field or property
    #balance = 0;

    constructor(customerName, balance = 0) {
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.#balance = balance;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        this.#balance -= amount;
    }

    set balance(amount) {
        if (!isNaN(amount)) {
            this.#balance = amount;
        }
    }

    get balance() {
        return this.#balance;
    }
}

class CurrentAccount extends BankAccount {
    transactionLimit = 50000;

    constructor(customerName, balance = 0) {
        super(customerName, balance);
    }


    // private  method
    #calculateInterest(amount) {
        console.log('Calculating interest');
    }

    takeBusinessLoan(amount) {
        this.#calculateInterest(amount);
        console.log('Taking business loan: ' + amount);
    }
}

const keyurAccount = new CurrentAccount('Keyur', 2000);
keyurAccount.balance = "keyur";
console.log(`balance : ${keyurAccount.balance}`);
keyurAccount.takeBusinessLoan(40000);
console.log(keyurAccount);

// keyurAccount.#calculateInterest(123);  // not accessible