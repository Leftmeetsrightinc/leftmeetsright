var showMenu = document.getElementsByClassName('menu-icon');
var closeMenu = document.getElementsByClassName('menu-close');
var navMenu = document.getElementsByClassName('slide-header');
var mainClass = document.getElementsByClassName('page-content');

showMenu[0].addEventListener('click', function () {
    if (navMenu[0].classList.contains('open')) {
        navMenu[0].classList.remove('open');
        mainClass[0].classList.remove('open');
    }
    else {
        navMenu[0].className += " open";
        mainClass[0].classList += " open";
    }
});

mainClass[0].addEventListener('click', function (event) {
    if (navMenu[0].classList.contains('open')) {
        navMenu[0].classList.remove('open');
        mainClass[0].classList.remove('open');
    }
});

 if ("serviceWorker" in navigator) {
   navigator.serviceWorker.register("./service-worker.js").then(function() {
     console.log("Service Worker Registered");
   });
 }
