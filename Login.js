document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('InputUsuario');
    const emailInput = document.getElementById('InputEmail');
    const passwordInput = document.getElementById('InputContraseña');
    const errorMessage = document.getElementById('error-message');

    const validUsername = 'angel';
    const validEmail = 'angelmontoya021@gmail.com';
    const validPassword = 'contra123';
    const FormatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const FormatoPassword = /(?=.*[0-9])/;  // Expresión regular para verificar al menos un carácter numérico

    // Validar en tiempo real
    usernameInput.addEventListener('input', validateUsername);
    usernameInput.addEventListener('blur', validateUsername);
    emailInput.addEventListener('input', validateEmail);
    emailInput.addEventListener('blur', validateEmail);
    passwordInput.addEventListener('input', validatePassword);
    passwordInput.addEventListener('blur', validatePassword);

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();

        // Realizar validaciones al intentar enviar el formulario
        const isUsernameValid = validateUsername();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();

        if (isUsernameValid && isEmailValid && isPasswordValid) {
            const username = usernameInput.value.trim();
            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();

            if (username === validUsername && email === validEmail && password === validPassword) {
                loginForm.classList.remove('was-validated');
                window.location.href = 'Home.html';
            } else {
                loginForm.classList.add('was-validated');
                errorMessage.classList.remove('d-none');
            }
        } else {
            loginForm.classList.add('was-validated');
        }
    });

    function validateUsername() {
        const username = usernameInput.value.trim();
        let valid = true;

        usernameInput.classList.remove('is-invalid', 'is-valid');
        if (username === '') {
            usernameInput.classList.add('is-invalid');
            usernameInput.nextElementSibling.textContent = 'Ingresa un nombre de usuario';
            valid = false;
        } else if (username.length < 5) {
            usernameInput.classList.add('is-invalid');
            usernameInput.nextElementSibling.textContent = 'El nombre de usuario debe tener al menos 5 caracteres';
            valid = false;
        } else {
            usernameInput.classList.add('is-valid');
        }

        return valid;
    }

    function validateEmail() {
        const email = emailInput.value.trim();
        let valid = true;

        emailInput.classList.remove('is-invalid', 'is-valid');
        if (email === '') {
            emailInput.classList.add('is-invalid');
            emailInput.nextElementSibling.textContent = 'Ingresa correo electrónico';
            valid = false;
        } else if (!FormatoEmail.test(email)) {
            emailInput.classList.add('is-invalid');
            emailInput.nextElementSibling.textContent = 'Favor ingresar un correo válido. Ejemplo: usuario@dominio.com';
            valid = false;
        } else {
            emailInput.classList.add('is-valid');
        }

        return valid;
    }

    function validatePassword() {
        const password = passwordInput.value.trim();
        let valid = true;

        passwordInput.classList.remove('is-invalid', 'is-valid');
        if (password === '') {
            passwordInput.classList.add('is-invalid');
            passwordInput.nextElementSibling.textContent = 'Ingresa una contraseña';
            valid = false;
        } else if (password.length < 8) {
            passwordInput.classList.add('is-invalid');
            passwordInput.nextElementSibling.textContent = 'La contraseña debe tener al menos 8 caracteres';
            valid = false;
        } else if (!FormatoPassword.test(password)) {
            passwordInput.classList.add('is-invalid');
            passwordInput.nextElementSibling.textContent = 'La contraseña debe tener al menos un carácter numérico';
            valid = false;
        } else {
            passwordInput.classList.add('is-valid');
        }

        return valid;
    }
});
