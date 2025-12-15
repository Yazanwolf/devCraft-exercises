
const nameInput = document.getElementById('name');
const nameError = document.getElementById('name-error');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');
const passwordInput = document.getElementById('password');
const passwordError = document.getElementById('password-error');
const repeatPasswordInput = document.getElementById('repeat-password');
const repeatPasswordError = document.getElementById('repeat-password-error');
const registerButton = document.getElementById('register-button');
const formElement = document.getElementById('register-form');
const registerForm = new FormData(formElement);
registerForm.append('name', nameInput.value);
registerForm.append('email', emailInput.value);
registerForm.append('password', passwordInput.value);
registerForm.append('repeatPassword', repeatPasswordInput.value);

const registerUser = () => {
    validateInputs();
}

nameInput.addEventListener('blur', () => {
    console.log(registerForm.get('name'));
    if (registerForm.get("name") === '') {
        nameError.classList.add('hidden');
    }
});

nameInput.addEventListener('focus', () => {
    nameError.classList.add('hidden');
});

const validateInputs = () => {
    if (nameInput.value === '') {
        nameError.classList.toggle('hidden');
    }
    if (emailInput.value === '' || !emailInput.value.includes('@')) {
        emailError.classList.toggle('hidden');
    }
    if (passwordInput.value === '') {
        passwordError.classList.toggle('hidden');
    }
    if (repeatPasswordInput.value === '') {
        repeatPasswordError.classList.toggle('hidden');
    }
}

registerButton.addEventListener('click', registerUser);

nameInput.addEventListener('input', (event) => {
    console.log(event.target.value);
});