1. factorial of no using recursion function 
function fact(n){
    if(n==1)
    return 1

 else{
    return fact(n-1)*n
 }

}

let r=fact(5)
console.log(r) 