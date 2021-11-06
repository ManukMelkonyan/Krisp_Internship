function Partition(arr, leftIndex, rightIndex){
    let partitionIndex = leftIndex;
    let pivot = arr[rightIndex];

    for(let i = leftIndex; i <= rightIndex; ++i){
        if(arr[i] < pivot){
            const temp = arr[partitionIndex];
            arr[partitionIndex] = arr[i];
            arr[i] = temp;
            partitionIndex++;
        }
    }

    const temp = arr[rightIndex];
    arr[rightIndex] = arr[partitionIndex];
    arr[partitionIndex] = temp;
    
    return partitionIndex;
}

function QuickSort(arr, leftIndex, rightIndex){
    if(leftIndex >= rightIndex){
        return;
    }

    let partitionIndex = Partition(arr, leftIndex, rightIndex);

    QuickSort(arr, leftIndex, partitionIndex - 1);
    QuickSort(arr, partitionIndex + 1, rightIndex);
}

let arr = [5, -1, 0, 9, 0, 2, 6, 3, -9];
QuickSort(arr, 0, arr.length - 1);
console.log(arr);

