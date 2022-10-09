const removeFromArray = function(initialArray, ...args) {
    let finalArray = [];
    for (let itemInitialArray of initialArray) {
        if (!args.includes(itemInitialArray)) finalArray.push(itemInitialArray);
    } 
    return finalArray;

};

// Do not edit below this line
module.exports = removeFromArray;
