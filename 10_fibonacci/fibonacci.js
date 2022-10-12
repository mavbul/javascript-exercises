const fibonacci = function(fibo) {
    if (fibo <= 0) return 'OOPS';

    let fibonacciArray = [1, 1];

    for (let i = 2; i < fibo; i++) {
        fibonacciArray[i] = fibonacciArray[i-1] + fibonacciArray[i-2]; 
    }

    return fibonacciArray[fibo-1];
};

// Do not edit below this line
module.exports = fibonacci;
