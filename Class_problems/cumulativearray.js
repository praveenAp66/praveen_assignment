1.cumulative array 
function cumulativeArray(arr) {
    var cumulative = [];
cumulative.push(arr[0])
    for (var i = 1; i < arr.length; i++) {
     
        cumulative.push(cumulative[i-1]+arr[i]);
    }
    return cumulative;
}

// Example usage:
var arr = [-3, 2, 5, 6, 7, 8, 9, -1];
var result = cumulativeArray(arr);
console.log("Cumulative array:", result);
