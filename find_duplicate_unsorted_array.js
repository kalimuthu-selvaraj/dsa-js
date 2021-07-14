var containsDuplicate = function(nums) {
    var mp = new Map();
    var i = 0;
    while(i < nums.length){
        if(mp.get(nums[i])) {
            return true;
            break;
        } else {
            mp.set(nums[i], true);
        }

        i++;
    }
    return false;
};

var containsDuplicate_1 = function(nums) {
    let set = new Set(nums)
    return set.size !== nums.length;

}

console.log(containsDuplicate_1([1,2,3]));

