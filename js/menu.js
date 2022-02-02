const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu__item");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".close__icon");
const menuIcon = document.querySelector(".menu__icon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

menuItems.forEach( 
    function(menuItem) { 
      menuItem.addEventListener("click", toggleMenu);
    }
)

hamburger.addEventListener("click", toggleMenu);