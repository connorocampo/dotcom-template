// RESPONSIVE NAV MENU

function toggleNav() {
  var nav = document.getElementById("nav");
  if (nav.className === "nav-links") {
    nav.className += " responsive";
  } else {
    nav.className = "nav-links";
  }
}

// CLOSE DROPDOWN WHEN CLICKING ANYWHERE ON SCREEN

window.onclick = function (toggle) {
  if (!toggle.target.matches(".toggle-nav")) {
    var dropdowns = document.getElementsByClassName("nav-links");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("responsive")) {
        openDropdown.classList.remove("responsive");
      }
    }
  }
};

// ADD ACTIVE CLASS TO NAV LINK WHEN SELECTED

function addActive(e) {
  if (document.querySelector("#nav a.active") !== null) {
    document.querySelector("#nav a.active").classList.remove("active");
  }
  e.target.className = "active";
}
