// Code your solution in this file!
//goal:
//Measure blocks (how far a location is from HQ).
// Measure feet (converting blocks to feet).
// Calculate travel distance in feet (start to destination).
// Calculate the fare price (based on how far someone traveled).
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42; //42nd street
    return Math.abs(pickupLocation - hqLocation) //math.abs to avoid -ve distances
}
function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation)
    return blocks * 264 // since 1 block is about 264 feet
}
function distanceTravelledInFeet(start, destination) {
    const blocksTravelled = Math.abs(destination - start);
    return blocksTravelled * 264;
}
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0; // Free for the first 400 feet
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02; // 2 cents per foot after the first 400
    } else if (distance > 2000 && distance <= 2500) {
        return 25; // Flat $25 fare
    } else {
        return "cannot travel that far"; // Over 2500 feet
    }
}
