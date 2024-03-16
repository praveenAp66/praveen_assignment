1.given number count setbits

let n=21
let cnt=0
while(n!=0)
{
   if(n&1==1)
   {
      cnt++
   }
   n=n>>1
}
console.log(cnt)
