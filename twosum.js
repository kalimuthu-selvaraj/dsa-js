var twoSum = function(nums, target) {
    var mp = new Map();
    for(var i=0; i< nums.length; i++) {
        if(mp.get((target-nums[i])) != undefined) {
            return [mp.get((target-nums[i])),i];
        }
        mp.set(nums[i],i);
    }
};

console.log(twoSum([2,7,11,15],9));