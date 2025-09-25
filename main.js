/**
    * Program: Temperature Converter
 * Description: Converts temperature from Celsius to Kelvin and Fahrenheit.
 */

function convertTemperature() {
    let celsius;
    let isValidInput = false;

    // Loop to prompt user until a valid number is entered
    do {
        // Prompt the user for input
        const input = prompt("Ingrese la temperatura en grados Celsius (°C):");

        // Check for cancel or empty input
        if (input === null || input.trim() === "") {
            console.log("Operation cancelled or empty input.");
            return;
        }

        // Attempt to convert the input string to a float number
        celsius = parseFloat(input);

        // Validate if the result is a number (not NaN)
        if (!isNaN(celsius)) {
            isValidInput = true;
        } else {
            // Error message for non-numeric input
            alert("❌ Error: The entered value is not a valid number. Please try again.");
            console.error("Input error: Non-numeric value entered: " + input);
        }

    } while (!isValidInput);

    // --- Conversion Formulas ---
    
    // Celsius to Fahrenheit: (C * 9/5) + 32
    const fahrenheit = (celsius * 9/5) + 32;

    // Celsius to Kelvin: C + 273.15
    const kelvin = celsius + 273.15;

    // --- Output Results to Console ---

    console.log(`\n--- Conversion Results for ${celsius}°C ---`);
    console.log(`Grados Kelvin: ${kelvin.toFixed(2)} K`); 
    console.log(`Grados Fahrenheit: ${fahrenheit.toFixed(2)} °F`);
    console.log("------------------------------------------");

    // --- Output Results to DOM ---
    
    const resultsHtml = `
        <p>Temperatura en Celsius: <strong>${celsius}°C</strong></p>
        <p>Grados Kelvin: <strong>${kelvin.toFixed(2)} K</strong></p>
        <p>Grados Fahrenheit: <strong>${fahrenheit.toFixed(2)} °F</strong></p>
    `;
    const resultDiv = document.getElementById('temperature-results');
    
    // Check if the DOM element exists before updating it
    if (resultDiv) {
        resultDiv.innerHTML = resultsHtml;
    }
}

// Call the function to start the program (uncomment if you want it to run on page load)
// convertTemperature();