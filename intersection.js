var intersect = function(nums1, nums2) {

    let iterateArr = nums1;
    let compareArr = nums2;
    let interSectArr = []

    if(nums1.length > nums2.length) {
        iterateArr = nums2;
        compareArr = nums1;
    }
    var mp = new Map();
    for(let num of compareArr) {
        mp.set(num, true);
    }

    console.log(mp);

    for (let num of iterateArr) {
        if( mp.get(num) ){
            mp.delete(num);
            interSectArr.push(num);
        }
    }

    return interSectArr;
};

// console.log(intersect([4,9,5], [9,4,9,8,4]))
console.log(intersect([3,1,2,1], [1,1]));