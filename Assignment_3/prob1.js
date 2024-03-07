1.function solve(int n){
    for(let i=0;i<n;i++){
    for(let j=0;j<i/2;j++){
//o(1) operation
}
}
}
ans:time complexity of this function is 
        for(let i=0;i<n;i++)-----> N
         for(let j=0;j<i/2;j++)---->logn+n^2
 so that N+n^2+logn-----> time complexity is O(n^2)