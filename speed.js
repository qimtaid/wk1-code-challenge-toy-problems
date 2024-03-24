function speedDetector(speed) {
    const speedLimit = 70;
    const demeritPointsPerFiveKm = 1;
    const excessSpeed = speed - speedLimit;

    if (excessSpeed <= 0) {
        console.log("Ok");
    } else {
        const demeritPoints = Math.floor(excessSpeed / 5) * demeritPointsPerFiveKm;

        if (demeritPoints > 12) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${demeritPoints}`);
        }
    }
}

// Input speed
const carSpeed = parseInt(prompt("Enter the speed of the car (in km/h):"));

// Check input
if (!isNaN(carSpeed)) {
    speedDetector(carSpeed);
} else {
    console.log("Invalid input. Please enter a valid number.");
}
