
// You should implement your task here.

module.exports = function towelSort (matrix) {
var newarr = [];
var k = 0;
if(matrix==undefined) return [];
if(matrix.length==1) return matrix;
for (var i = 0; i < matrix.length; i++)
{
if( i==0 || i%2==0)
{
for (var j = 0; j <matrix[i].length; j++)
{
  newarr.push(matrix[i][j]);
}
}
else{
  for(j=matrix[i].length-1; j>=0; j--)
  {
    newarr.push(matrix[i][j]);
  }
}
}

return newarr;
}
