let menuicon = document.querySelector(".menubar");
let menulist = document.querySelector(".nav-items");
menuicon.addEventListener("click", function () {
    menulist.classList.toggle("show");
})