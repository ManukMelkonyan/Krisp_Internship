function Merge(arr, leftIndex, middleIndex, rightIndex){
    const leftSize = middleIndex - leftIndex + 1;
    const rightSize = rightIndex - middleIndex;
    const leftArray = [];
    const rightArray = [];
    
    for(let i = leftIndex; i <= middleIndex; ++i){
        leftArray.push(arr[i]);
    }
    
    for(let i = middleIndex + 1; i <= rightIndex; ++i){
        rightArray.push(arr[i]);
    }

    let i = 0, j = 0, k = leftIndex;
    while(i < leftSize && j < rightSize){
        if(leftArray[i] <= rightArray[j]){
            arr[k] = leftArray[i];
            ++i;
        }
        else{
            arr[k] = rightArray[j];
            ++j;
        }
        ++k;
    }

    while(i < leftSize){
        arr[k] = leftArray[i];
        ++k;
        ++i;
    }
    while(j < rightSize){
        arr[k] = rightArray[j];
        ++k;
        ++j;
    }
}

function MergeSort(arr, leftIndex, rightIndex){
    if(leftIndex >= rightIndex){
        return;
    }

    const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    MergeSort(arr, leftIndex, middleIndex);
    MergeSort(arr, middleIndex + 1, rightIndex);
    Merge(arr, leftIndex, middleIndex, rightIndex);
}


let arr = [7, 1, 5, 5, 2, 3, 4, 99, 1, 0, -9, 2];
MergeSort(arr, 0, arr.length - 1);
console.log(arr);