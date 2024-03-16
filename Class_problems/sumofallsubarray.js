find  sum of all sub arrays for 
let a=[7,9,5,6,11]
let sum=0
let n=a.length;
for(let i=0;i<n;i++)
{
    for(j=i;j<n;j++)
    {
        for(k=i;k<=j;k++)
        {
            sum=sum+a[k];
        }
    }
}
console.log("total sum is"+sum)