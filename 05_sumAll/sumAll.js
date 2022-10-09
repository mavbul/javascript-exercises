const sumAll = function(first, second) {
    if (typeof(first) != 'number' || typeof(second) != 'number') return 'ERROR';
    if (first < 0 || second < 0) return 'ERROR';
    let buffer;
    if (first > second) {
        buffer = first;
        first = second;
        second = buffer;
    }
    let sum = 0;
    for (let i = first; i <= second; i++) {
        sum += i; 
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
