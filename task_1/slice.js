const slice = (array, start, end) => {
    if(start === undefined) start = 0;
    if(end === undefined) end = array.length;
    if(start < 0){
        start = array.length + start;
        if(start < 0){
            start = 0;
        }
    }
    if(end < 0){
        end = array.length + end;
    }
    const res = [];
    for(let i = start; i < end; ++i){
        res.push(array[i]);
    }
    
    return res;
};


// MDN examples as test cases

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(slice(animals, 2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(slice(animals, 2, 4));
// expected output: Array ["camel", "duck"]

console.log(slice(animals, 1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(slice(animals, -2));
// expected output: Array ["duck", "elephant"]

console.log(slice(animals, 2, -1));
// expected output: Array ["camel", "duck"]

console.log(slice(animals, 1, -100));
// expected output: Array ["ant", "bison", "camel", "duck"]
