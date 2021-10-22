class Author{
    constructor(name, email, gender){
        this._name = name;
        this._email = email;
        this._gender = gender;
    }

    get name (){
        return this._name;
    }
    set name(value){
        this._name = value;
    }
    get email (){
        return this._email;
    }
    set email(value){
        this._email = value;
    }
    get gender (){
        return this._gender;
    }
    set gender(value){
        this._gender = value;
    }
    
    toString(){
        return `Author { name: ${this._name}, email = ${this._email}, gender = ${this._gender} }`;
    }
}

class Book{
    constructor(title, author, price, quantity){
        this._title = title;
        this._author = author;
        this._price = price;
        this._quantity = quantity;
    }

    get title(){
        return this._title;
    }
    set title(value){
        this._title = value;
    }

    get author(){
        return this._title;
    }
    set author(value){
        this._author = value;
    }

    get price(){
        return this._price;
    }
    set price(value){
        this._price = value;
    }

    get quantity(){
        return this._quantity;
    }
    set quantity(value){
        this._quantity = value;
    }

    getProfit(){
        return price * this._quantity;
    }

    toString(){
        return `Book { title = ${this._title}, author = ${this._author.toString()}, price = ${this._price}, quantity = ${this._quantity} }`;
    }
}