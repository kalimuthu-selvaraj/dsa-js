var plusOne = function(digits) {

    var carry = false;
    var n = digits.length-1;
    var addPlusOne = digits[n] + 1;
    
    if(addPlusOne.toString().length == 2) {
        carry = true;
    }else {
        digits[n] = addPlusOne;
    }

    //[9,0,0,0]
    if(carry === true) {
        digits.push(0);
        for(var i=digits.length-1; i > 0; i--) {
            if(digits[i-1] + 1 == 10) {
                if((i-1) == 0 && digits[i-1] == 9) {
                    digits[i-1] = 1;
                }else{
                    digits[i-1] = 0;
                }
            } else {
                digits[i-1] = digits[i-1] + 1;
                digits.splice(digits.length -1);
                break;
            }
        }
    }
    return digits;
};

var plusOne_1 = function(digits) {
    var addPlusOne =  digits[digits.length-1] + 1;
    digits.splice(digits.length-1, 1);
    [...addPlusOne.toString()].forEach(n => digits.push(parseInt(n)));
    return digits;
};

// console.log(plusOne([1,8,9,9]));
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,9]));

// [6145390195186705544]
