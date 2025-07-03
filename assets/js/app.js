let menuicon = document.querySelector(".menubar");
let menulist = document.querySelector(".nav-items");
menuicon.addEventListener("click", function () {
    menulist.classList.toggle("show");
})
$('.sliderbox').slick({
  dots: false,
  infinite: true,
  speed: 300,
  arrow: true,
   nextArrow: ".next",
  prevArrow: ".prev",
  autoplay: true,
    autoplaySpeed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        slidesToShow: 3,
        
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
       {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,  
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    
    
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 567,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
let mybutton = document.getElementById("myBtn");
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function topFunction() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}