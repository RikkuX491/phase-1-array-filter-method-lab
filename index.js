// Function # 1 solution - findMatching()
function findMatching(driverNames, nameToMatch){
    return driverNames.filter(driverName => {
        return driverName.toUpperCase() === nameToMatch.toUpperCase();
    })
}

// Function # 2 solution - fuzzyMatch() with for loop
// function fuzzyMatch(driverNames, startsWithString){
//     return driverNames.filter(driverName => {
//         for(let index = 0; index < startsWithString.length; index++){
//             if(driverName[index] !== startsWithString[index]){
//                 return false;
//             }
//         }
//         return true;
//     })
// }

// Function # 2 solution - fuzzyMatch() using the built-in startsWith() method
function fuzzyMatch(driverNames, startsWithString){
    return driverNames.filter(driverName => {
        return driverName.startsWith(startsWithString);
    })
}

// Function # 3 solution - matchName()
function matchName(drivers, name){
    return drivers.filter(driver => {
        return driver.name === name;
    })
}