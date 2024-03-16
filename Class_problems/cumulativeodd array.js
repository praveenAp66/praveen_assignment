1.cumulatove odd array
let arr = [-7, 1, 5, 2, -4, 3, 0];

let n = arr.length;
let cumoddarr = [];

for (let k = 0; k < n; k++) {
    if (k === 0) {
        cumoddarr[k] = 0; // 
    } else if (k %2==0 && k>0) {
        cumoddarr[k] = cumoddarr[k - 1]; 
  
    }else if (k %2!=0 && k>0) {
        cumoddarr[k] = arr[k] + cumoddarr[k - 1];
    }

}

console.log(cumoddarr);
