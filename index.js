// Code your solution here

// Function # 1 - findMatching() function
function findMatching(driverNamesArray, stringToMatch){
    return driverNamesArray.filter((driverName) => {
        return driverName.toUpperCase() === stringToMatch.toUpperCase()
    })
}

// Function # 2 - fuzzyMatch() function
function fuzzyMatch(driverNamesArray, stringToMatch){
    return driverNamesArray.filter((driverName) => {
        // return driverName.slice(0, stringToMatch.length) === stringToMatch
        return driverName[0] === stringToMatch[0]
    })
}

// Function # 3 - matchName() function
function matchName(driverObjectsArray, stringToMatch){
    return driverObjectsArray.filter((driverObject) => {
        return driverObject.name.toLowerCase() === stringToMatch.toLowerCase()
    })
}