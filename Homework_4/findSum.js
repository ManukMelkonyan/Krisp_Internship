function findSum(arr, sum){
    const sums = [];
    for(let i = 0; i < arr.length; ++i){
        for(let j = i + 1; j < arr.length; ++j){
            if(arr[i] + arr[j] === sum){
                sums.push([arr[i], arr[j]]);
            }
        }
    }
    return sums;
}

console.log(findSum([8, 7, 2, 5, 3, 1], 10));