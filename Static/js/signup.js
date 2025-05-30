async function Context() {
  window.addEventListener("contextmenu", (e) => {
    console.log("Inspect Buton Blocked");
    e.preventDefault();
  });
}
Context();

const login = localStorage.getItem("loginAccess");

if (login === "true") {
  // alert("true")
  window.location.href = "/index";
} else {
  localStorage.setItem("loginAccess", "false");
  localStorage.setItem("adminAccess", "false");
}

const form = document.getElementById("signupForm");
const passwordInput = document.getElementById("password");
const strengthBars = document.querySelectorAll(".strength-bar");

// Password strength indicator
passwordInput.addEventListener("input", () => {
  const password = passwordInput.value;
  let strength = 0;

  if (password.length >= 8) strength++;
  if (password.match(/[A-Z]/)) strength++;
  if (password.match(/[0-9]/)) strength++;
  if (password.match(/[^A-Za-z0-9]/)) strength++;

  strengthBars.forEach((bar, index) => {
    bar.style.backgroundColor = index < strength ? "#1a73e8" : "#eee";
  });
});

// Toggle password visibility
function togglePassword() {
  const passwordField = document.getElementById("password");
  const confirmField = document.getElementById("confirmPassword");
  const toggle = document.querySelector(".show-password");

  if (passwordField.type === "password") {
    passwordField.type = "text";
    confirmField.type = "text";
    toggle.textContent = "Hide";
  } else {
    passwordField.type = "password";
    confirmField.type = "password";
    toggle.textContent = "Show";
  }
}

// Form validation
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isValid = true;

  // Username validation
  const username = document.getElementById("username").value;
  if (username.length < 4) {
    showError("usernameError", "Username must be at least 4 characters");
    isValid = false;
  }

  // Email validation
  const email = document.getElementById("email").value;
  if (!validateEmail(email)) {
    showError("emailError", "Please enter a valid email address");
    isValid = false;
  }

  // Password validation
  const password = passwordInput.value;
  if (password.length < 8) {
    showError("passwordError", "Password must be at least 8 characters");
    isValid = false;
  }

  // Confirm password validation
  const confirmPassword = document.getElementById("confirmPassword").value;
  if (password !== confirmPassword) {
    showError("confirmPasswordError", "Passwords do not match");
    isValid = false;
  }

  if (isValid) {
    // Submit form
    form.reset();
    strengthBars.forEach((bar) => (bar.style.backgroundColor = "#eee"));
    // alert('Account created successfully!');
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("loginAccess", "true");
    window.location.href = "/index";
  }
});

function showError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = message;
  errorElement.style.display = "block";
  setTimeout(() => {
    errorElement.style.display = "none";
  }, 3000);
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
