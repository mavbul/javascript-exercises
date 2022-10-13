const getTheTitles = function(arrayOfObjects) {
    let titleArray = [];
    for (const itemObject of arrayOfObjects) {
        console.log(itemObject);
        for (const [key, value] of Object.entries(itemObject)) {
            console.log(key);
            if (key == 'title') {
                titleArray.push(value);
            }
        };
    }
    return titleArray; 
};

// Do not edit below this line
module.exports = getTheTitles;
