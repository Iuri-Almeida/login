function passwordLength () {
    const password = document.querySelector('[name = "password"]');

    if (password.value.length < 8) {
        password.style.border = '2px solid red';
    }

    else {
        password.style.border = '2px solid #A1E9C5';
    }
}

function confirmPassword () {
    // definindo os textos para comparação
    const password = document.querySelector('[name = "password"]');
    const confirmPassword = document.querySelector('[name = "confirm-password"]');

    if (password.value != confirmPassword.value || password.value.length < 8) {
        confirmPassword.style.border = '2px solid red';
    }

    else {
        confirmPassword.style.border = '2px solid #A1E9C5';
    }
}