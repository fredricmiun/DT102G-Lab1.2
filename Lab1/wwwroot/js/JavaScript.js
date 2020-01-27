"use strict";
const uri = window.location.pathname.split("/");
function active_menu() {
    var aElement = document.getElementsByClassName("nav-item");
    aElement[0].classList.add("active");
    var i = 0;
    for (i; i < aElement.length; i++) {
        if (aElement[i].getAttribute("href") == uri[1]) {
            aElement[0].classList.remove("active");
            aElement[i].classList.add("active");
        }
    }
}
active_menu();