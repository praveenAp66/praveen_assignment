1.given an array find the length of smallest subarray which contains both max and min value

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