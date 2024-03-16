1.find  sum of all sub arrays usingcumulative array for 
let a=[7,9,5,6,11]
let cumulative=[];
cumulative.push(arr[0])
     for (let i = 1; i < arr.length; i++) {
     
        cumulative.push(cumulative[i-1]+arr[i]);
   }
let sum=0
let n=a.length;
for(let i=0;i<n;i++)
{
    for(j=i;j<n;j++)
    {
       if(i==0)
       {
        sum=sum+cumulative[j]
       }
       else{
        sum=sum+cumulative[j]+cumulative[i-1]
       }
    }
}
console.log("total sum is"+sum)1