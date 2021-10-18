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

// const array1 = [];
// const reducer = (previousValue, currentValue) => previousValue + currentValue;

// // 1 + 2 + 3 + 4
// console.log(reduce(array1, reducer));
// // expected output: 10

// // 5 + 1 + 2 + 3 + 4
// console.log(reduce(array1, reducer, 5));
// // expected output: 15

// ************************************************************

// const getMax = (a, b) => Math.max(a, b);

// // callback is invoked for each element in the array starting at index 0
// console.log(reduce([1, 100], getMax, 50)); // 100
// console.log(reduce([    50], getMax, 10)); // 50

// // callback is invoked once for element at index 1
// console.log(reduce([1, 100], getMax));     // 100

// // callback is not invoked
// console.log(reduce([    50], getMax));     // 50
// console.log(reduce([      ], getMax, 1));  // 1

// console.log(reduce([      ], getMax));

// ************************************************************

// let flattened = reduce([[0, 1], [2, 3], [4, 5]],
//     function(previousValue, currentValue) {
//       return previousValue.concat(currentValue)
//     },
//     []
//   )

//   console.log(flattened);

// ************************************************************

// let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

// let countedNames = reduce(names, function (allNames, name) {
//   if (name in allNames) {
//     allNames[name]++
//   }
//   else {
//     allNames[name] = 1
//   }
//   return allNames
// }, {});
// console.log(countedNames);
// // countedNames is:
// // { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

// let people = [
//     { name: 'Alice', age: 21 },
//     { name: 'Max', age: 20 },
//     { name: 'Jane', age: 20 }
//   ];
  
//   function groupBy(objectArray, property) {
//     return reduce(objectArray, function (acc, obj) {
//       let key = obj[property]
//       if (!acc[key]) {
//         acc[key] = []
//       }
//       acc[key].push(obj)
//       return acc
//     }, {})
//   }
  
//   let groupedPeople = groupBy(people, 'age')
//   console.log(groupedPeople)
//   // groupedPeople is:
//   // {
//   //   20: [
//   //     { name: 'Max', age: 20 },
//   //     { name: 'Jane', age: 20 }
//   //   ],
//   //   21: [{ name: 'Alice', age: 21 }]
//   // }