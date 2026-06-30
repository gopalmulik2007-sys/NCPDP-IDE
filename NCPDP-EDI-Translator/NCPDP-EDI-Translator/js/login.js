// ===============================
// NCPDP EDI Translator API
// Login JavaScript
// ===============================

// Password Show/Hide

const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");

togglePassword.addEventListener("click", function () {

    if (password.type === "password") {
        password.type = "text";
        this.classList.remove("fa-eye");
        this.classList.add("fa-eye-slash");
    }
    else {
        password.type = "password";
        this.classList.remove("fa-eye-slash");
        this.classList.add("fa-eye");
    }

});

// Login Validation

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const passwordValue = document.getElementById("password").value.trim();

    if (username === "" || passwordValue === "") {

        alert("Please enter Username and Password.");
        return;

    }

    if (username === "admin" && passwordValue === "admin123") {

        alert("Login Successful!");

        window.location.href = "html/dashboard.html";

    }
    else {

        alert("Invalid Username or Password");

    }

});