var singleNumber = function(nums) {
    let mp = new Map();
    for(var i = 0; i< nums.length; i++) {
        if(mp.get(nums[i])) {
            mp.delete(nums[i]);
        }else{
            mp.set(nums[i], true);
        }
        
        
    }

    return [...mp.keys()][0];
};

console.log(singleNumber([1,1,2,3,2,4,4]));