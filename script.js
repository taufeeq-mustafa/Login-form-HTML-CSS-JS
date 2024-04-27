function findInputs() {
    return Array.from(document.querySelectorAll('input'));
    
}

function validateInputs() {
    const inputs = findInputs();
    for (let input of inputs) {
        if (input.hasAttribute('required') && input.value.trim() === '') {
            return false; 
        }
    }
    return true;
}


function login() {
    const rememberMeChecked = document.getElementById('rememberMe').checked;
    if (rememberMeChecked) {
        alert("Logged in successfully with Remember Me marked as set");
    } else {
        alert("Logged in successfully");
    }
}

function clearInputs() {
    const inputs = findInputs();
    for (let input of inputs) {
        input.value = ''; 
    }
}

document.getElementById('okButton').addEventListener('click', function() {
    const inputsFilled = validateInputs();
    if (!inputsFilled) {
        alert("Please fill in all mandatory fields.");
        return; 
    }
    login();
});

document.getElementById('cancelButton').addEventListener('click', function() {
    clearInputs();
});
