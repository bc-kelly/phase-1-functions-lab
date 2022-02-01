// Code your solution in this file!
const HQ = 42

function distanceFromHqInBlocks(someValue) {
    if (someValue === 43) {
        return someValue - HQ;
    }
    if (someValue === 50) {
        return someValue - HQ;
    }
    if (someValue === 34) {
        return HQ - someValue;
    }
}

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
}
       
function distanceTravelledInFeet (start, destination) {
    return Math.abs(destination - start) * 264;
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400){
        return 0;
    }
    else if (distance <= 2000) {
        return ((distance - 400) *.02);
    }
    else if (distance <= 2500) {
        return 25;
    }
    else if (distance >= 2500) {
        return `cannot travel that far`
    }
    


    //else distance
    //return (destination - start) * 0;
}

//function calculatesFarePrice(start, destination) {
    //return Math.abs(destination - start) * 264 - 400 * .02;
//}
