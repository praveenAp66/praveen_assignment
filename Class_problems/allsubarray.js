find all sub arrays for 
let a=[7,9,5,6,11]
let cnt=0
let n=a.length;
for(let i=0;i<n;i++)
{
    for(j=i;j<n;j++)
    {
        for(k=i;k<=j;k++)
        {
            console.log(a[k])
            cnt++
        }
    }
}
console.log("total count is"+cnt)
