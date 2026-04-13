
const nameInput = document.getElementById('name');
const nameError = document.getElementById('name-error');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');
const passwordInput = document.getElementById('password');
const passwordError = document.getElementById('password-error');
const repeatPasswordInput = document.getElementById('repeat-password');
const repeatPasswordError = document.getElementById('repeat-password-error');
const registerSuccess = document.getElementById('register-success');
const formElement = document.getElementById('register-form');

const registerUser = (event) => {
    event.preventDefault();
    if (!validateInputs()) {
        registerSuccess.classList.add('hidden');
        return;
    }
    registerSuccess.classList.remove('hidden');
}

formElement.addEventListener('submit', registerUser);

nameInput.addEventListener('blur', () => {
    validateName();
});

emailInput.addEventListener('blur', () => {
    validateEmail();
});

passwordInput.addEventListener('blur', () => {
    validatePassword();
});
repeatPasswordInput.addEventListener('blur', () => {
    validateRepeatPassword();
});

nameInput.addEventListener('focus', () => {
    nameError.classList.add('hidden');
});
emailInput.addEventListener('focus', () => {
    emailError.classList.add('hidden');
});
passwordInput.addEventListener('focus', () => {
    passwordError.classList.add('hidden');
});
repeatPasswordInput.addEventListener('focus', () => {
    repeatPasswordError.classList.add('hidden');
});

function validateInputs() {
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isRepeatPasswordValid = validateRepeatPassword();
    return isNameValid && isEmailValid && isPasswordValid && isRepeatPasswordValid;
}

function validateName() {
    if (!isNameValid()) {
        nameError.classList.remove('hidden');
        return false;
    }
    return true;
}

function validateEmail() {
    if (!isEmailValid()) {
        emailError.classList.remove('hidden');
        return false;
    }
    return true;
}

function validatePassword() {
    if (!isPasswordValid()) {
        passwordError.classList.remove('hidden');
        return false;
    }
    return true;
}

function validateRepeatPassword() {
    if (!isRepeatPasswordValid()) {
        repeatPasswordError.classList.remove('hidden');
        return false;
    }
    return true;
}

// Helper function to validate email format
function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

function isNameValid() {
    const inputValue = nameInput.value;
    return inputValue && inputValue !== '';
}

function isEmailValid() {
    const emailValue = emailInput.value;
    return emailValue && isValidEmail(emailValue);
}

function isPasswordValid() {
    const passwordValue = passwordInput.value;
    return passwordValue && passwordValue !== '' && passwordValue.length >= 8;
}

function isRepeatPasswordValid() {
    const repeatPasswordValue = repeatPasswordInput.value;
    return repeatPasswordValue && repeatPasswordValue !== '' && repeatPasswordValue === passwordInput.value;
}    