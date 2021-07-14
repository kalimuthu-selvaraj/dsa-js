var rotate = function(matrix) {
    
    for(var i=0; i < matrix.length; i++) {
        var k = 0;
        for(var j=matrix[i].length-1; j>=0; j--){
            console.log(i,k,j,i);
            var temp = matrix[j][i];
            matrix[j][i] = matrix[i][k];
            matrix[i][k] = temp;
            k++;
        }
        break;

    }        
    return matrix;
    
};

console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]));
// 1 : [[7,2,3],[4,5,6],[1,8,9]]
// 2 : [[7,4,3],[2,5,6],[1,8,9]]
// 3 : [[7,4,1],[2,5,6],[3,8,9]]  0,2 = 2,0

// 1: 

/**
0,0 2,0
0,1 1,0
0,2 2,0

1,1 2,1
1,2 1,1
1,3 2,1

2,0 2,2
2,1 1,2
2,2 2,2
 */