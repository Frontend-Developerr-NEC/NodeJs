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
    closebtnImg.setAttribute("src", "./ico/home.png");
    closebtnImg.setAttribute("height", "22px");
    closebtnImg.setAttribute("width", "22px");
  } else {
    // alert("Open");
    closebtnImg.setAttribute("src", "./ico/close.png");
    closebtnImg.setAttribute("height", "22px");
    closebtnImg.setAttribute("width", "22px");
  }
});

const logout = document.getElementById("logout");
logout.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.setItem("loginAccess", "false");
  window.location.href = "/";
});
