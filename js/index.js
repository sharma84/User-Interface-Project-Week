// JS goes here
//navigation and menu
class Nav { 
  constructor(nav) { 
    this.navButtons = nav.querySelector(".nav-buttons"); 
    this.navOpen = nav.querySelector(".nav-open"); 
    this.navClose = nav.querySelector(".nav-close"); 
    this.menuContent = nav.querySelector(".menu"); 
    this.navButtons.addEventListener("click", this.toggle); 
  }   
  toggle = () => {//method
    this.navOpen.classList.toggle("hidden");
    this.navClose.classList.toggle("hidden");
    this.menuContent.classList.toggle("hidden");
  };
}
let navs = document.querySelectorAll(".nav");
navs.forEach(nav => new Nav(nav));