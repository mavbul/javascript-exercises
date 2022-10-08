const repeatString = function(str, num) {
    let finalStr = '';
    if (num < 0) return 'ERROR';
    while (num > 0) {
        finalStr += str;
        num--;
    }
    return finalStr;
};

// Do not edit below this line
module.exports = repeatString;
