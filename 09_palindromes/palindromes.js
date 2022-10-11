const palindromes = function (str) {
    str = str.toLowerCase();
    let inputArray = Array.from(str);
    inputArray = removeFromArray(inputArray, '.', ',', ' ','!');

    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] !== inputArray[inputArray.length - 1 - i]) return false;
    }
    return true; 
};

const removeFromArray = function(initialArray, ...args) {
    let finalArray = [];
    for (let itemInitialArray of initialArray) {
        if (!args.includes(itemInitialArray)) finalArray.push(itemInitialArray);
    } 
    return finalArray;

};

// Do not edit below this line
module.exports = palindromes;
