var quickSort = function(nums, low, high) {

    console.log(low,'<',high);

    if(low < high) {
        var pi = partition(nums, low, high);
        console.log("pi", pi);
        quickSort(nums, low, pi-1);
		quickSort(nums, pi+1, high);
        
    }

    return nums;

}

var partition = function(nums, low, high) {

    var i = low -1;
    var pivot = nums[high];

    for(var j = low; j < high; j++){
        if(nums[j] <= pivot) {
            i++;

            var temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }
    }

    var temp = nums[i+1];
    nums[i+1] = nums[high];
    nums[high] = temp;
    
    return i+1;

}
var arr = [50, 23, 9, 18, 61, 32, 100, 56, 76];
var low = 0;
var high = arr.length-1;


console.log(quickSort(arr, low, high))