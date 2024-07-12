const isUsernameValid = validateUsername();
const isPasswordValid = validatePassword();

if (isUsernameValid && isPasswordValid) {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        loginForm.classList.remove('was-validated');
        successMessage.classList.remove('d-none'); // Mostrar mensaje de inicio de sesión exitoso
        setTimeout(function() {
            window.location.href = 'Dashboard.html';
        }, 2000); // Redirigir después de 2 segundos
    } else {
        loginForm.classList.add('was-validated');
        passwordInput.classList.add('is-invalid');
        passwordInput.nextElementSibling.textContent = 'Usuario o contraseña incorrectos';
    }
} else {
    loginForm.classList.add('was-validated');
}

function validateUsername() {
    const username = usernameInput.value.trim();
    let valid = true;

    usernameInput.classList.remove('is-invalid', 'is-valid');
    if (username === '') {
        usernameInput.classList.add('is-invalid');
        usernameInput.nextElementSibling.textContent = 'Ingresa un nombre de usuario';
        valid = false;
    } else {
        usernameInput.classList.add('is-valid');
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
    } else {
        passwordInput.classList.add('is-valid');
    }

    return valid;
}
