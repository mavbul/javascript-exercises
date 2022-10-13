const findTheOldest = function(arrayPeopleObj) {
    let oldestIndex = 0;
    let howOldBuffer = 0; 
    for (let i = 0; i < arrayPeopleObj.length; i++) {
        const now = new Date();
        if (!arrayPeopleObj[i].yearOfDeath) arrayPeopleObj[i].yearOfDeath = now.getFullYear();
        const howOld = arrayPeopleObj[i].yearOfDeath - arrayPeopleObj[i].yearOfBirth;
        console.log(howOld);
        console.log(howOldBuffer);
        if (howOld > howOldBuffer) {
            oldestIndex = i;
            howOldBuffer = howOld;
        }
        console.log(oldestIndex);
    }

    return arrayPeopleObj[oldestIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
