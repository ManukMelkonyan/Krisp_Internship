const every = (array, callbackFn, thisArg) => {
    for(let i = 0; i < array.length; ++i){
        const element = array[i];
        if(!callbackFn.call(thisArg, element, i, array)){
            return false;
        }
    }

    return true;
};

// example from MDN

const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(every(array1, isBelowThreshold));
// expected output: true

const array2 = [1, 30, 39, 29, 100, 13];

console.log(every(array2, isBelowThreshold));
// expected output: false
