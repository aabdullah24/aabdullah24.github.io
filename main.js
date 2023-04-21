let hiringSection = document.getElementById('hiring-section');
let inputHiring = document.getElementById('hiring');
let iputhHourlyRate = document.getElementById('hourly-rate')
let radioButtons = document.querySelectorAll('input[name="matter"]');
let postalCode = document.getElementById('postal-code');
let errorMessage = document.getElementById('error-message');
let submitButton = document.getElementById('submit-button');

hiringSection.style.display = 'none';

// Showing the section depending on the input selected
for (let radioButton of radioButtons) {
    radioButton.addEventListener('change', function(e) {
        if (e.target.value === 'hiring') {
            hiringSection.style.display = 'block';
        } else {
            hiringSection.style.display = 'none';
            // Getting the hourly rate input and making it a not required input
            // since hiring section is not selected
            document.getElementById('hourly-rate').removeAttribute("required");
        }
    });
}

// Postal code validation with regex pattern
postalCode.addEventListener('input', function(e) {
    let pattern = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    var currentValue = e.target.value;
    var valid = pattern.test(currentValue);
    
    // Displaying errorMessage
    if (valid) {
        errorMessage.style.display = 'none';
    } else {
        errorMessage.style.display = 'block';
    }
});
