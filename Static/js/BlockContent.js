async function Context() {
  window.addEventListener("contextmenu", (e) => {
    console.log("Inspect Buton Blocked");
    e.preventDefault();
  });
}
export default Context();
