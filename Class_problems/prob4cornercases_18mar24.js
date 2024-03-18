// corner cases while calculating sum of sub array sum
let a = [4,-3,-1,8];
let n = a.length;
let cumulative = [];
 cumulative.push(a[0]);
 for (let i = 1; i < a.length; i++) {
    cumulative.push(cumulative[i - 1] + a[i]);
}

let mytable = {};
for (let i = 0; i < cumulative.length; i++) {
     if (mytable[cumulative[i]]) {
         mytable[cumulative[i]]++;
     } else {
         mytable[cumulative[i]] = 1;
    }
 } 
 
 for (let key in mytable) {
    if (mytable[key] > 1 || key==0) {
      console.log("sum of sub array is zero")
      break
        
     }
     else{
        console.log("sum of sub array is not sero")
     }
 }


