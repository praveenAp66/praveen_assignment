given an array check if sum of arry pairs of different elements is eqal to k
let arr=[3,0,5,1]
let k=2;

function checkpairsum(arr,k)
{
    for(let i=0;i<arr.length-1;i++)
    {
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[i]+arr[j]==k)
            return true
        }
    }
    return false
}
console.log(checkpairsum(arr,k))