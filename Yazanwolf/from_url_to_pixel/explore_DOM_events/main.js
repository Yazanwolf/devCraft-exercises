
const nameInput = document.getElementById('name');
const nameError = document.getElementById('name-error');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');
const passwordInput = document.getElementById('password');
const passwordError = document.getElementById('password-error');
const repeatPasswordInput = document.getElementById('repeat-password');
const repeatPasswordError = document.getElementById('repeat-password-error');
const formElement = document.getElementById('register-form');

const registerUser = (event) => {
    event.preventDefault();
    if (isNameValid() && isEmailValid() && isPasswordValid() && isRepeatPasswordValid()) {
            alert('Registration successful!');
            return;
    }
    alert('Validation failed! Please check your input.');
}

nameInput.addEventListener('blur', () => {
    if (!isNameValid()) {
        nameError.classList.remove('hidden');
    }
});

emailInput.addEventListener('blur', () => {
    if (!isEmailValid()) {
        emailError.classList.remove('hidden');
    }
});

passwordInput.addEventListener('blur', () => {
    if (!isPasswordValid()) {
        passwordError.classList.remove('hidden');
    }
});
repeatPasswordInput.addEventListener('blur', () => {
    if (!isRepeatPasswordValid()) {
        repeatPasswordError.classList.remove('hidden');
    }
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

formElement.addEventListener('submit', registerUser);

// Helper function to validate email format
function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

function isRepeatPasswordValid() {
    const repeatPasswordValue = repeatPasswordInput.value;
    return repeatPasswordValue && repeatPasswordValue !== '' && repeatPasswordValue === passwordInput.value;
}

function isPasswordValid() {
    const passwordValue = passwordInput.value;
    return passwordValue && passwordValue !== '' && passwordValue.length > 8;
}

function isEmailValid() {
    const emailValue = emailInput.value;
    return emailValue && isValidEmail(emailValue);
}

function isNameValid() {
    const inputValue = nameInput.value;
    return inputValue && inputValue !== '';
}