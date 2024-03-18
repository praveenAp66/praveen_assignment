// given an array check if any subarray has sum 0
let a = [2, 2, 1, -3, 4, 3, 1, -2, -3, 2];
let n = a.length;

let cumulative = [];
cumulative.push(a[0]);
for (let i = 1; i < a.length; i++) {
    cumulative.push(cumulative[i - 1] + a[i]);
}
let mytable = {};
for (let i = 0; i < n; i++) {
     if (mytable[a[i]]) {
         mytable[a[i]]++;
     } else {
         mytable[a[i]] = 1;
    }
 } 
 
 for (let key in mytable) {
    if (mytable[key] > 1) {
      console.log("sum of sub array is false")
      break
        
     }
     else{
        console.log("sum of sub array is true")
     }
 }ys
