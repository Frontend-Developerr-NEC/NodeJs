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

const form = document.getElementById("signinForm");
const passwordInput = document.getElementById("password");
const passwordToggle = document.querySelector(".password-toggle");

// Toggle password visibility
function togglePassword() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordToggle.textContent = "Hide";
  } else {
    passwordInput.type = "password";
    passwordToggle.textContent = "Show";
  }
}

// Form validation
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = passwordInput.value;

  // Email validation
  if (!validateEmail(email)) {
    showError("emailError", "Please enter a valid email address");
    form.reset();
  }

  const user = localStorage.getItem("email");
  const pass = localStorage.getItem("password");

  if (user === email && pass === password) {
    localStorage.setItem("loginAccess", "true");
    window.location.href = "/index";
  }
  if (email == "Admin@jb.dev" && password == "12345") {
    localStorage.setItem("adminAccess", "true");
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
