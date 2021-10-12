const reduce = (array, callbackFn, initialValue) => {
    let acc = initialValue;
    let startingIndex = 0;
    if(initialValue === undefined){
        acc = array[0];
        startingIndex = 1;
    }
    for(let i = startingIndex; i < array.length; ++i){
        let currentValue = array[i];
        acc = callbackFn(acc, currentValue, i, array);
    }
    return acc;
};

// examples from MDN

const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;

// 1 + 2 + 3 + 4
console.log(reduce(array1, reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(reduce(array1, reducer, 5));
// expected output: 15
