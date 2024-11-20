class BankAccount {
    customerName;
    accountNumber;
    balance = 0;

    constructor(customerName, balance = 0) {
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        this.balance -= amount;
    }
}

// Single inheritance
class CurrentAccount extends BankAccount {
    transactionLimit = 50000;

    constructor(customerName, balance = 0) {
        super(customerName, balance);
    }

    takeBusinessLoan(amount) {
        console.log('Taking business loan: ' + amount);
    }
}

// Hierarchical inheritance
class SavingAccount extends BankAccount {
    transactionLimit = 10000;

    constructor(customerName, balance = 0) {
        super(customerName, balance);
    }

    takePersonalLoan(amount) {
        console.log('Taking personal loan: ' + amount);
    }
}

const keyurAccount = new CurrentAccount('Keyur', 500); // balance : 500
keyurAccount.deposit(500); // balance : 1000
keyurAccount.withdraw(100); // balance : 900
keyurAccount.takeBusinessLoan(40000);
console.log(keyurAccount);