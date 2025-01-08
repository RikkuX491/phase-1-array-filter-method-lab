function findMatching(driverNames, name){
    return driverNames.filter((driver) => {
        return name.toLowerCase() === driver.toLowerCase()
    })
}

function fuzzyMatch(driverNames, letters){
    return driverNames.filter((name) => {
        return name.slice(0, letters.length) === letters
    })
}

function matchName(array, string){
    return array.filter(object => {
        return object.name === string
    })
}