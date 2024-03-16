1.given number n ,set ith bit of N 
let n=21
let i=4
let op=n&(1<<(i-1))
if(op==0)
{
n= n|(1<<(i-1))
}
console.log(n)
