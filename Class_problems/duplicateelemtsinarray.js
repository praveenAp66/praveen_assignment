1.given an array print duplicate number

let a=[2,2,3,1,3,4,5,6,6,2]
let n=a.length;
let op=[];
for(i=0;i<n;i++)
{
   if(op.includes(a[i]))
   continue
for(j=i+1;j<n;j++)
{
   if(a[i]==a[j])
   {
      op.push(a[i])
      break
   }
}
}
console.log(op)