

let x = document.getElementById('bars');
let y  = document.getElementById('navid');

x.onclick = () => {
    x.classList.toggle('fa-times');
    y.classList.toggle('open'); 
}


var swiper = new Swiper(".home-container", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });

