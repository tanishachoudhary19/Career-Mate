function signupUser() {
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;

    if (!username || !email || !password) {
        alert("Please fill all fields");
        return false;
    }

    let userData = { username, email, password };
    localStorage.setItem("careerMateUser", JSON.stringify(userData));

    alert("Signup successful! You can now login.");
    window.location.href = "login.html";
    return false; // Prevent form submit
}


function loginUser() {
    let email = document.getElementById("loginEmail").value.trim();
    let password = document.getElementById("loginPassword").value;

    let storedUser = JSON.parse(localStorage.getItem("careerMateUser"));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
        alert("Login successful! Welcome " + storedUser.username);
        localStorage.setItem("careerMateLoggedIn", "true");
        window.location.href = "index.html"; // Redirect after login
    } else {
        alert("Invalid credentials! Please try again.");
    }

    return false; // Prevent form submit
}

function logoutUser() {
    localStorage.removeItem("careerMateLoggedIn");
    window.location.href = "login.html";
}

function checkLogin() {
    if (!localStorage.getItem("careerMateLoggedIn")) {
        window.location.href = "login.html";
    }
}

