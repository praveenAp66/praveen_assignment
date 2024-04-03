let arr=[1,5,6,9,10,11,22,100]
let n=arr.length
let si=0;
let li=n-1;
let searchele=9;
let ans=binarysearch(arr,si,li,searchele)
console.log(ans)
function binarysearch(arr,si,li,searchele){

    if(si>li)
    return false
   let mid=Math.floor((si+li)/2);
   if(arr[mid]===searchele)
   {
    return true
   }
   else if (arr[mid]>searchele) {
    return binarysearch(arr,si,mid-1,searchele)
   }
   else  {
    return binarysearch(arr,mid+1,li,searchele)
   }



}