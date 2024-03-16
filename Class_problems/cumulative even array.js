1.cumulative even array
let arr = [-7, 1, 5, 2, -4, 3, 0];

let n = arr.length;
let cumevenarr = [];

for (let k = 0; k < n; k++) {
    if (k === 0) {
        cumevenarr[k] = arr[k]; // Initialize cumarr with the first element of arr
    } else if (k %2==0 && k>0) {
        cumevenarr[k] = arr[k] + cumevenarr[k - 1];
    }else if (k %2!=0 && k>0) {
        cumevenarr[k] = cumevenarr[k - 1]; 
    }

}

console.log(cumevenarr);

