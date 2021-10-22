//  closure implementation

function gather (str) {
    const arr = [str];
    const f = (s) => {
    arr.push(s);
        return f;
    };
    f.arr = arr;
    f.order = (index) => {
        const orderedArray = [];
        orderedArray.push(arr[index]);
        const g = (i) => {
            orderedArray.push(arr[i]);
            return g;
        }
        g.get = () => {
            return orderedArray.join('');
        }
        return g;
    };
    return f;
}


//  bind implementation

// function gather (str) {
//     const arr = [str];
//     const f = function (s) {
//         this.push(s);
//         const g = f.bind(this);
//         console.log(this);
//         g.order = (index) => {
//             let elementAtIndex = this[index];
//             this.push(elementAtIndex);
//             this[index] = '';
//             const k = g.order.bind(this);
//             k.get = () => {
//                 return this.join('');
//             }
//             return k;
//         }
//         return g;
//     }
//     return f.bind(arr);
// }

console.log(gather("a")("b")("c")('d').order(1)(3)(2)(0).get());

// console.log(gather("a")("b")("c").order(0)(1)(2).get()); // ➞ "abc"
// console.log(gather("a")("b")("c").order(2)(1)(0).get()); // ➞ "cba"
// console.log(gather("e")("l")("o")("l")("!")("h").order(5)(0)(1)(3)(2)(4).get()); //➞ "hello!"
