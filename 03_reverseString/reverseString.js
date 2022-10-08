const reverseString = function(str) {
    let returnStr = '';
    let index = str.length - 1;
    while (index >= 0 ) {
        returnStr += str[index];
        index--; 
    }
    return returnStr;
};

// Do not edit below this line
module.exports = reverseString;
