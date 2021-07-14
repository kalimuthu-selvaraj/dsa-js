var removeDuplicates = function(nums) {
    var j = 0;
    var n = nums.length;
    
    if (n===0 || n===1)
        return n;

    for (i = 1; i < n; i++) {
        if(nums[i] != nums[j]) {
            j++;
            nums[j] = nums[i];
        }
    }
    console.log(nums);
    return j + 1;
};

console.log(removeDuplicates([-1,0,0,0,0,3,3]))
console.log("===============");
console.log(removeDuplicates([1,1,2]))

console.log(1 - 7);