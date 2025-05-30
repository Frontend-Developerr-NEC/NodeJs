async function Context() {
  window.addEventListener("contextmenu", (e) => {
    console.log("Inspect Buton Blocked");
    e.preventDefault();
  });
}
Context();

const logout = document.getElementById("logout");
logout.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.setItem("loginAccess", "false");
  localStorage.setItem("adminAccess", "false");
  window.location.href = "/";
});