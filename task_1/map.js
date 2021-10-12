const map = (array, callbackFn, thisArg) => {
    const newArray = [];
    for(let i = 0; i < array.length; ++i){
        const element = array[i];
        newArray.push(
            callbackFn.call(thisArg, element, i, array)
        );
    }
    
    return newArray;
};

// example from MDN

let numbers = [1, 4, 9];
let roots = map(numbers, function(num) {
    return Math.sqrt(num);
});
console.log(roots);
// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]