const arr = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43];

let sum = arr.reduce(
    (acc, current) => {
        acc += current >= 18 ? current : 0;
        return acc;
    }, 0);

console.log(sum); // expected output: 22 + 55 + 166 + 36 + 205 + 333 + 95 + 62 + 43 = 1017