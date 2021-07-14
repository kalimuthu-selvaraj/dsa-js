function binarySearch(arr, searchItem) {
    var upperBound  = arr.length -1; // 3
    var lowerBound = 0;

    while (lowerBound <= upperBound){
        console.log(upperBound + "<" +lowerBound);
        if(upperBound < lowerBound)
            break;

        var midPoint = Math.floor(lowerBound + (upperBound - lowerBound) / 2); // 1
        console.log(midPoint);

        if(arr[midPoint] == searchItem){
            console.log("Item Found",arr[midPoint], midPoint);
            break;
        } else {
            if(arr[midPoint] < searchItem) {
                lowerBound = midPoint + 1; // 1
            } else{
                upperBound = midPoint - 1;
            }
        }
        
    }
}
var arrElem = [23, 26, 47, 55, 67, 99, 109, 121];
binarySearch(arrElem, 121);