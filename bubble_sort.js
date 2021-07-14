var bubbleSort = function(list) {

    var swapped = false;

    for(var i = 0; i < list.length; i++) {
        for(var j = 0; j < list.length; j++) {
            if(list[j] > list[j+1]){
                var temp = list[j]
                list[j] = list[j+1];
                list[j+1] = temp;
                swapped = true;
            }
        }
        if(!swapped){
            break;
        }
    }
    return list;

}

console.log(bubbleSort([243, 45, 23, 356, 3, 5346, 35, 5]));