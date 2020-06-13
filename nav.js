// ADD ACTIVE CLASS TO NAV LINK WHEN SELECTED

function myFunction(e) {
  if (document.querySelector("#nav a.active") !== null) {
    document.querySelector("#nav a.active").classList.remove("active");
  }
  e.target.className = "active";
}
