
1.given an array integers find the product of all elements [3, 5, 2, 4]
function calculateProduct(array) {
    var product = 1;
    for (var i = 0; i < array.length; i++) {
        product *= array[i];
    }
    return product;
}

var numbers = [3, 5, 2, 4];
var product = calculateProduct(numbers);
console.log("The product of all elements is: " + product);

