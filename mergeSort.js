
let randomList = Array.from({length:100}, ()=>{
    return Math.round(Math.random()*1000);
})

console.log('Before:');
console.log(randomList);

mergeSort(randomList);

console.log('After:');
console.log(randomList);




function mergeSort(inputArray){
    //exit condition if single element array
    if(inputArray.length<2){
        return;
    }
    const midIndex = Math.floor(inputArray.length/2);
    let leftArray = inputArray.slice(0, midIndex);
    let rightArray = inputArray.slice(midIndex);

    mergeSort(leftArray);
    mergeSort(rightArray);

    merge(inputArray, leftArray, rightArray);

    function merge(initalArray, leftArray, rightArray){
        let i=0, j=0, k=0;

        while(i<leftArray.length && j<rightArray.length){
            if(leftArray[i]<=rightArray[j]){
                initalArray[k] = leftArray[i];
                i++;
                k++
            }
            else {
                initalArray[k] = rightArray[j];
                j++;
                k++;
            }
        }

        while(i<leftArray.length){
            initalArray[k] = leftArray[i];
            i++;
            k++;
        }

        while(j<rightArray.length){
            initalArray[k] = rightArray[j];
            j++;
            k++;
        }
    }
}


