// Switch to register form
function showRegister() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("register-form").style.display = "block";
    document.getElementById("form-title").innerText = "Register";
}

// Switch to login form
function showLogin() {
    document.getElementById("register-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
    document.getElementById("form-title").innerText = "Login";
}

// Login function
function handleLogin() {
    const user = document.getElementById("login-username").value;
    const pass = document.getElementById("login-password").value;

    if (user === "" || pass === "") {
        alert("Please fill all fields!");
    } else {
        alert("Login Successful!");
    }
}

// Register function
function handleRegister() {
    const user = document.getElementById("reg-username").value;
    const email = document.getElementById("reg-email").value;
    const pass = document.getElementById("reg-password").value;

    if (user === "" || email === "" || pass === "") {
        alert("All fields are required!");
    } else {
        alert("Registration Successful!");
        showLogin();
    }
}
