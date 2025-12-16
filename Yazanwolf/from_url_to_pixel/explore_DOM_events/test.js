document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const passwordField = document.getElementById("password");
    const confirmPasswordField = document.getElementById("confirmPassword");
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        // Validation logic
        let isValid = true;

        if (nameField.value.trim() === "") {
            nameError.textContent = "Name is required";
            isValid = false;
        } else {
            nameError.textContent = "";
        }

        if (!isValidEmail(emailField.value)) {
            emailError.textContent = "Invalid email address";
            isValid = false;
        } else {
            emailError.textContent = "";
        }

        if (passwordField.value.length < 8) {
            passwordError.textContent = "Password must be at least 8 characters";
            isValid = false;
        } else {
            passwordError.textContent = "";
        }

        if (confirmPasswordField.value !== passwordField.value) {
            confirmPasswordError.textContent = "Passwords do not match";
            isValid = false;
        } else {
            confirmPasswordError.textContent = "";
        }

        if (isValid) {
            // Form submitted successfully
            successMessage.classList.remove("hidden");
        }
    });

    // Helper function to validate email format
    function isValidEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }
});