const min = 1;
const max = 49;
const displays = [
    document.getElementById('number1'),
    document.getElementById('number2'),
    document.getElementById('number3'),
    document.getElementById('number4'),
    document.getElementById('number5'),
    document.getElementById('number6'),
    document.getElementById('number7'),
    document.getElementById('number8'),
    document.getElementById('number9'),
    document.getElementById('number10'),
    document.getElementById('number11'),
    document.getElementById('number12')
];
const askNumber = document.getElementById('askNumber');

// Function to generate a unique random number
function generateNumber(oldNumber) {
    let newNumber;
    do {
        newNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (oldNumber.includes(newNumber));  // Ensure no duplicates
    return newNumber;
}

// Event listener for the "generate" button
document.querySelector('#submit').addEventListener('click', () => {
    const oldNumber = []; // Reset the array for each generation
    const systemNumber = parseInt(askNumber.value, 10); // Get the system number

    // Validate the system number
    if (isNaN(systemNumber) || systemNumber < 7 || systemNumber > 12) {
        alert("Please enter a number between 7 and 12.");
        return;
    }

    // Generate numbers for the specified system
    for (let i = 0; i < systemNumber; i++) {
        const newNumber = generateNumber(oldNumber); // Generate a unique number
        displays[i].textContent = newNumber; // Display the number
        oldNumber.push(newNumber); // Add the number to the oldNumber array
    }

    // Clear any remaining displays if the system number is less than 12
    for (let i = systemNumber; i < displays.length; i++) {
        displays[i].textContent = '';
    }
});