var maxProfit = function(prices) {
    max = 0
    for (i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1])
            max += prices[i] - prices[i - 1];
    }
    return max;
};

console.log(maxProfit([7,1,5,3,6,4]));

/*
iteration 1:
if(1 > 7) false;

iteration 2: 
if(5 > 1) max = 4

iteration 3:
if(3 > 5) false

iteration 4:
if(6 > 3) max = 7

iteration 5: 
if(4 > 6) false


*/



