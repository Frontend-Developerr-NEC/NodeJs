async function Context() {
  window.addEventListener("contextmenu", (e) => {
    console.log("Inspect Buton Blocked");
    e.preventDefault();
  });
}
Context();

const github = document.getElementById("github");
const leetcode = document.getElementById("leetcode");
const hackerrank = document.getElementById("hackerrank");
const linkedin = document.getElementById("linkedin");

github.addEventListener("click", () => {
  window.location.href = "https://github.com/Frontend-Developerr-NEC";
});

leetcode.addEventListener("click", () => {
  window.location.href = "https://leetcode.com/u/JaanBrigith/";
});

hackerrank.addEventListener("click", () => {
  window.location.href = "https://www.hackerrank.com/profile/jaanbrigith25";
});

linkedin.addEventListener("click", () => {
  window.location.href="https://www.linkedin.com/in/jaan-brigith-298235333"
  // alert("Not Updated");
});

const login = localStorage.getItem("loginAccess");

if (login === "true") {
  // alert("true")
  window.location.replace = "/index";
} else {
  window.location.href = "/signup";
}

let closebtn = document.getElementById("closebtn");
let closebtnImg = document.getElementById("closebtnImg");
let closeNav = document.querySelector("nav");

closebtn.addEventListener("click", (e) => {
  e.preventDefault();
  closeNav.classList.toggle("openNav");

  if (closeNav.className == "closeNav") {
    // alert("close");
    closebtnImg.setAttribute("height", "22px");
    closebtnImg.setAttribute("width", "22px");

    closebtnImg.setAttribute("src", "./ico/home.png");
  } else {
    // alert("Open");
    closebtnImg.setAttribute("height", "22px");
    closebtnImg.setAttribute("width", "22px");

    closebtnImg.setAttribute("src", "./ico/close.png");
  }
});

const logout = document.getElementById("logout");
logout.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.setItem("loginAccess", "false");
  window.location.href = "/";
});
