// ADD ACTIVE CLASS TO NAV LINK WHEN SELECTED

function addActive(e) {
  if (document.querySelector("#nav a.active") !== null) {
    document.querySelector("#nav a.active").classList.remove("active");
  }
  e.target.className = "active";
}
