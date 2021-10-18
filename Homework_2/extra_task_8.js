function gather (str, arr=[]) {
    arr.push(str);
    const f = (s) => {
        return gather(s, arr);
    };
    f.arr = arr;
    f.order = (index, arrOrder=[]) => {
        arrOrder.push(arr[index]);
        const g = (i) => {
            return f.order(i, arrOrder);
        }
        g.get = () => {
            return arrOrder.join('');
        }
        return g;
    };

    return f;
}


console.log(gather("a")("b")("c").order(0)(1)(2).get()); // ➞ "abc"
console.log(gather("a")("b")("c").order(2)(1)(0).get()); // ➞ "cba"
console.log(gather("e")("l")("o")("l")("!")("h").order(5)(0)(1)(3)(2)(4).get()); //➞ "hello!"