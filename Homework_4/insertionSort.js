function insertionSort(arr){
    for(let i = 1; i < arr.length; ++i){
        let temp = arr[i];
        let j = i - 1;
        while(j >= 0 && temp > arr[j]){
            arr[j + 1] = arr[j];
            --j;
        }
        arr[j + 1] = temp;
    }
}


let arr = [7, 1, 5, 5, 2, 3, 4, 99, 1, 0, -9, 2];
insertionSort(arr);
console.log(arr);
