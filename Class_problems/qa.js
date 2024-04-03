// let a=[1,2,3,2,4,5,3,4]
// let n=a.length
// let mytable={}
// for(let i=0;i<n;i++)
// {
//     if(mytable[a[i]]){
//         mytable[a[i]]++
//     }
//     else{
//         mytable[a[i]]=1;
//     }
// }
// for(let key in mytable){
//     console.log(key +"frequency is  "+mytable[key])
// }

1.find the count of subarray where sunof sub array is odd no 
let a=[1,2,3,2,4,5,3,4]
let n=a.length
let cumulative =[];
for(let i=0;i<n;i++)
{
    if(i==0)
    {
        cumulative.push(a[i])
    }
    else{
        cumulative.push(cumulative[i-1]+a[i])
    }
}
console.log(cumulative)


 let count=0;

 for(let l=0;l<n;l++)
 {
    for(let r=l;r<n;r++)
    { 
         if(l==0)
         {
            sum=cumulative[r]
            if(sum%2!=0)
            {
                count++
            }
         }
         else{
            sum=cumulative[r]-cumulative[l-1];
            if(sum%2!=0)
            {
                count++
            }

         }
    }
    
 }
 console.log(count)