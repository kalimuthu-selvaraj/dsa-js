var rotate = function(nums, k) {
    var n = nums.length;
    for(i = 0; i < k; i++) {
        var lastIndexVal = nums[n-1]; // 3
        nums.push(0);
        j = 0;
        do {
            nums[n-j] = nums[n-1-j]
            j++;
        }
        while (j < n);
        nums.splice(n,1);
        nums[0] = lastIndexVal;
    }
    return nums;
};

var rotate_2 = function(nums, k) {
    var tempArr = [];
    var n = nums.length -1;
    for(var i =0; i < k; i++){
        var lastIndexVal = nums[n];
        tempArr.push(lastIndexVal);
        nums.splice(n,1);
        nums = tempArr.concat(nums);
        tempArr = [];
    }

    return nums;
};

//[1,2,3,4]
// console.log(rotate([-1,-100,3,99], 2));
console.log(rotate_2([1,2,3,4,5,6,7], 3));

//console.log(rotate_2([1,2], 1));

// console.log(rotate([1,2,3], 4));

// big O(k*n);



