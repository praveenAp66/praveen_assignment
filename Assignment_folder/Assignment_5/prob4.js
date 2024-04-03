Q2. Closest MinMax


Problem Description
Given an array A, find the size of the smallest subarray such that it contains at least one occurrence of the maximum value of the array

and at least one occurrence of the minimum value of the array.



Problem Constraints
1 <= |A| <= 2000



Input Format
First and only argument is vector A



Output Format
Return the length of the smallest subarray which has at least one occurrence of minimum and maximum element of the array



Example Input
Input 1:

A = [1, 3, 2]
Input 2:

A = [2, 6, 1, 6, 9]


Example Output
Output 1:

 2
Output 2:

 3


Example Explanation
Explanation 1:

 Take the 1st and 2nd elements as they are the minimum and maximum elements respectievly.
Explanation 2:

 Take the last 3 elements of the array.

let arr = [1, 2, 3, 1, 3, 4, 6, 4, 6, 3];
let n = arr.length;
let min_length=Number.MAX_VALUE;
let max = Number.MIN_VALUE
for (let i = 0; i < n; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log(max);

let min = Number.MAX_VALUE
for (let i = 0; i < n; i++) {
    if (arr[i] <min) {
        min = arr[i];
    }
}
console.log(min);

for(let l=0;l<n;l++)
{
  if(arr[l]==min)
  {
   for(let r=l+1;r<n;r++)
   {
      if(arr[r]==max)
      {
let calclulated_length=r-l+1;
if(calclulated_length<min_length)
{
   min_length=calclulated_length
}
      }
   }
  }

  if(arr[l]==max)
  {
   for(let r=l+1;r<n;r++)
   {
      if(arr[r]==min)
      {
let calclulated_length=r-l+1;
if(calclulated_length<min_length)
{
   min_length=calclulated_length
}
      }
   }
  }
}

console.log(min_length)