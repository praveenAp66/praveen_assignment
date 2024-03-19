1. fibonacci series using recursive function 
function fibonacci(a, b, n) {
    if (n == 0)
        return ; // Return a when n reaches 0
    else {
        let cur = a + b;
        console.log(cur);
      return fibonacci(b, cur, n - 1); 
       
    }
}

let r = fibonacci(0, 1, 5);
console.log(r); // Output the result