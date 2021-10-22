class Account{
    constructor(id, name, balance){
        this._id = id;
        this._name = name;
        this._balance = balance;
    }

    get name(){
        return this._name;
    }
    get id(){
        return this._id;
    }
    get balance(){
        return this._balance;
    }

    set name(value){
        this._name = value;
    }
    set balance(value){
        this._balance = value;
    }

    credit(amount){
        this._balance += amount;
    }
    
    debit(amount){
        if(amount <= this._balance){
            this._balance -= amount;
        }
        else{
            console.log('Amount exceeded balance!');
        }
    }

    transferTo(anotherAccount, amount){
        if(amount <= this._balance){
            this.debit(amount);
            anotherAccount.credit(amount);
        }
        else{
            console.log('Amount exceeded balance!');
        }
    }

    static identifyAccounts(accountFirst, accountSecond){
        return accountFirst._id === accountSecond._id &&
               accountFirst._name === accountSecond._name &&
               accountFirst._balance === accountSecond._balance;
    }

    toString(){
        return `Account { id = ${this._id}, name = ${this._name}, balance = ${this._balance} }`;
    }
}