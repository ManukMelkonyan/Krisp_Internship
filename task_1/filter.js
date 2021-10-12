const filter = (array, callbackFn, thisArg) => {
    const newArray = [];
    for(let i = 0; i < array.length; ++i){
        const element = array[i];
        if(callbackFn.call(thisArg, element, i, array)){
            newArray.push(element);
        }
    }
    return newArray;
};


// examples from MDN

function isBigEnough(value) {
    return value >= 10
}
let filtered = filter([12, 5, 8, 130, 44], isBigEnough);
console.log(filtered); // filtered is [12, 130, 44]


const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
    for (let i = 2; num > i; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return num > 1;
}

console.log(filter(array, isPrime)); // [2, 3, 5, 7, 11, 13]