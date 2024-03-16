1. given an student array find the avg score of class [90,80,35,75,96]
function calculateAverage(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    var average = sum / array.length;
    return average;
}

var numbers = [90, 80, 35, 40, 75, 96];
var avg = calculateAverage(numbers);
console.log("The average is: " + avg);
