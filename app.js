let menuBtn=document.querySelector("#menu-btn");
let navbar=document.querySelector('.navbar');

menuBtn.addEventListener("click",function(){
    // console.log("clicked");
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('open');
});

var swiper = new Swiper(".course-slider ", {
    
    grabCursor:true,
    loop:true,

    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    breakpoints: {
       
        540: {
          slidesPerView: 1,
          spaceBetween:20,
          
        },
        768: {
          slidesPerView: 2,
          spaceBetween:20,
          
        },
        1024: {
          slidesPerView: 4,
          spaceBetween:20,
          
        },
      },
  });

  var swiper = new Swiper(".teachers-slider ", {
    
    grabCursor:true,
    loop:true,

    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    breakpoints: {
       
        540: {
          slidesPerView: 1,
          spaceBetween:20,
          
        },
        768: {
          slidesPerView: 2,
          spaceBetween:20,
          
        },
        1024: {
          slidesPerView: 4,
          spaceBetween:20,
          
        },
      },
  });
