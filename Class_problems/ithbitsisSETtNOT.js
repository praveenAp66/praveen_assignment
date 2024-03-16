1.given number 'a' and 'i' check if ith position 'a ' is set or not

let a=20;
let i=3;
let op=a &(1<<(i-1))
{
   if(op==0)
   {
      console.log("notset")
   }
   else{
      console.log("set")
   }
}
