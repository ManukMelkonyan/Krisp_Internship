function SelectionSort(arr){
    const n = arr.length;
    for(let i = 0; i < n; ++i){
        for(j = i + 1; j < n; ++j){
            if(arr[i] > arr[j]){
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
}

let arr = [7, 5, 5, 2, 3, 4, 99, 1, 0, -9, 2];
SelectionSort(arr);
console.log(arr);