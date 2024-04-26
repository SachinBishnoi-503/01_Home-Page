let menuicon = document.querySelector(".menubar");
let menulist = document.querySelector(".nav-items");
menuicon.addEventListener("click", function () {
    menulist.classList.toggle("show");
})
$('.sliderbox').slick({
  dots: false,
  infinite: false,
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