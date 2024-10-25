// form-handler.js
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values of the first name and last name
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    
    // Get the email value and validate it
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation pattern

    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        emailError.style.display = "block"; // Show error message
        return; // Stop the form submission
    } else {
        emailError.style.display = "none"; // Hide error message
    }

    // Validate Phone Number
    const countryCode = document.getElementById('countryCode').value;
    const phone = document.getElementById('phone').value;
    const phoneError = document.getElementById('phoneError');
    const phonePattern = /^\d{1,4}[-\s]?\d{1,4}[-\s]?\d{4}$/; // Example pattern (adjust as necessary)

    // Check if phone number is valid based on selected country code
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid phone number.");
        return; // Stop the form submission
    }

    // Display the popup message
    alert(`Thank you, ${firstName} ${lastName}, for submitting the form!`);

    // Reset the form after submission
    document.querySelector('.contact-form').reset();

    // If you want to proceed with the form submission to the backend
    // Uncomment the line below to submit the form after the popup
    // event.target.submit();
}
