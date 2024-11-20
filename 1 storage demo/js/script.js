// Select DOM elements
const loginForm = document.getElementById("loginForm");
const logoutBtn = document.getElementById("logoutBtn");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

// Helper functions for cookie handling
function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

function deleteCookie(name) {
    setCookie(name, '', -1);
}

// Form submit event to save data and "log in"
loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;

    if (email && password) {
        // Save to Local Storage, Session Storage, and set a cookie
        localStorage.setItem("userEmail", email);
        sessionStorage.setItem("userEmail", email);
        setCookie("userEmail", email, 7); // expires in 7 days

        alert("Login successful! Data saved in Local Storage, Session Storage, and Cookie.");
        logoutBtn.style.display = "block";
    }
});

// Logout button event to clear data
logoutBtn.addEventListener("click", function () {
    // Clear storage
    localStorage.removeItem("userEmail");
    sessionStorage.removeItem("userEmail");
    deleteCookie("userEmail");

    emailInput.value = "";
    passwordInput.value = "";
    alert("Logged out and data cleared.");
    logoutBtn.style.display = "none";
});

// Initialize the form on page load
function initializeForm() {
    const savedEmail = sessionStorage.getItem("userEmail") || localStorage.getItem("userEmail") ;
    if (savedEmail) {
        emailInput.value = savedEmail;  
        logoutBtn.style.display = "block";
    }
}
initializeForm();