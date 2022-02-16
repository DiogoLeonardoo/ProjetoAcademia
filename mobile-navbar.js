$(function(e) {
    $('nav a:nth-child(2)').click (function(e){
        $('html,body').animate({scrollTop:1200},200)
 });
    $('nav a:nth-child(3)').click (function(e){
        $('html,body').animate({scrollTop:2200},200)
 });
 $('nav a:nth-child(4)').click (function(e){
        $('html,body').animate({scrollTop:3230},200)
 });

});

class MobileNavbar {
    constructor() {
        this.mobileMenu = document. querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass= "active";
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click",() => console.log("hey"));
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    "list-inline",
    "list-inline li",
);