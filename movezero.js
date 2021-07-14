var moveZeroes = function(nums) {
    var slice = 0;

        for(var i=0; i < nums.length; i++) {
            if(nums[i-slice] == 0){
                nums.splice(i-slice,1);
                nums.push(0);
                slice += 1;

            }
        }
    
    return nums;
};

console.log(moveZeroes([0,1,0,3,12]));
//console.log(moveZeroes([0,0,1]));