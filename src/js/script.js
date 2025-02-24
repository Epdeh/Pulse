//  $(document).ready(function(){
//     $('.carusel_inner').slick({
//      infinite: true,
//   speed: 300,
//     prevArrow:'<button type="button" class="slick-prev"><img src="icons/left.png>"></button>',
//     nextArrow:'<button type="button" class="slick-next"><img src="icons/right.png"></button>',
//   responsive: [ {
//     breakpoint: 768,
//     settings: {
//             dots: true,
//             arrows:false,
//     }
//   }
//   ]

  
//     });
//   });



var slider = tns({
  container: '.carusel_inner',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  controls:false,
  nav:false
});

document.querySelector('.prev').addEventListener('click', function  (){
  slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', function  (){
  slider.goTo('next');
});