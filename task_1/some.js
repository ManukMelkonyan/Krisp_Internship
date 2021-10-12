const some = (array, callbackFn, thisArg) => {
    for(let i = 0; i < array.length; ++i){
        const element = array[i];
        if(callbackFn.call(thisArg, element, i, array)){
            return true;
        }
    }

    return false;
};

// examole from MDN

// checks whether an element is even
const even = (element) => element % 2 === 0;

const array1 = [1, 2, 3, 4, 5];

console.log(some(array1, even));
// expected output: true
const array2 = [1, 3, 7, 5];

console.log(some(array2, even));
// expected output: false
