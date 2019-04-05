// JS goes here
//tweenmax (target, duration, {vars-what are we changing});
window.addEventListener
(
    "click", () => 
  {
   TweenMax.from('.jumbotron-desktop', 1, {opacity:0.3})
  }
);




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
  }
}
let navs = document.querySelectorAll(".nav");
navs.forEach(nav => new Nav(nav));


//tabs
class TabLink {
  constructor(link) {
    this.link = link;
    this.data = this.link.dataset.tab;
    this.item = document.querySelector(`.tab-item[data-tab = "${this.data}"]`);
    this.tabItem = new TabItem(this.item);
    this.link.addEventListener('click', this.select);  
  }
  select = () => {
    const links = document.querySelectorAll('.tabs-link');    
    links.forEach( link => {link.classList.remove('selected-link')
    });    
    this.link.classList.add('selected-link');  
    this.tabItem.select();   
  }
}

class TabItem {
  constructor(item) {
   this.item = item;
  }
  select = () => {
    const items = document.querySelectorAll('.tab-item');
    items.forEach( item => {item.classList.remove('selected-tab');
    })
    this.item.classList.add('selected-tab');
  }
}
let links = document.querySelectorAll('.tabs-link').forEach( link => new TabLink(link)); 

//carousel
// let projects = document.querySelector('.about-project');
// project1 = document.querySelector('.about-project');