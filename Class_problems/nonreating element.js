1.find out the first non repeating element 
let a = [2, 2, 3, 1, 3, 4, 5, 6, 6, 2];
let n = a.length;
let mytable = {};
for (let i = 0; i < n; i++) {
    if (mytable[a[i]]) {
        mytable[a[i]]++;
    } else {
        mytable[a[i]] = 1;
    }
}
let nonRepeatingElement = null;
for (let key in mytable) {
    if (mytable[key] == 1) {
      console.log(key)
        break;
    }
}
console.log("Non-repeating element:", nonRepeatingElement);
console.log("Frequency table:", mytable);