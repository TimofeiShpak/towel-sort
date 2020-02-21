module.exports = function towelSort (matrix) {
  if(!Array.isArray(matrix))return [];
  let arr = [];
  let j=0;
  let bool=1;
  let repeat=1;
  for(let i=0; i<matrix.length; i++){
  	if(!Array.isArray(matrix[i])){arr[j]=matrix[i];j++;}
  		else{
      if(i%2==0)matrix[i].sort((a,b)=>  a-b);
      else matrix[i].sort((a,b)=>  b-a);
  			for(let q=0; q<matrix[i].length; q++){
  				if(!Array.isArray(matrix[i][q])){arr[j]=matrix[i][q];j++;}
  					else{ 
  						for(let w=0; w<matrix[i][q].length; w++){
  							if(!Array.isArray(matrix[i][q][w])){arr[j]=matrix[i][q][w];j++;}
  						}
  					}
			}
		}
		repeat=1;
  }
  return arr;
}
