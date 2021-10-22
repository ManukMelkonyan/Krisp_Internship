class Rectangle{
    constructor(length, width){
        this._length = length;
        this._width = width;
    }

    get length(){
        return this._length;
    }
    set length(value){
        this._length = value;
    }

    get width(){
        return this._width;
    }
    set width(value){
        this._width = value;
    }

    getArea(){
        return this._length * this._width;
    }

    getPerimeter(){
        return this._length * 2 + this._width * 2;
    }

    toString(){
        return `Rectangle { length = ${this._length}, width = ${this._width} }`;
    }
}
const rect = new Rectangle(2, 3);
console.log(rect.toString());
console.log(rect.length);
console.log(rect.width);
console.log(rect.getArea());
console.log(rect.getPerimeter());
