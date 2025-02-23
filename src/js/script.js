$(document).ready(function(){
    $('.carusel_inner').slick({
     infinite: true,
  speed: 300,
    prevArrow:'<button type="button" class="slick-prev"><img src="../icons/left.png>"></button>',
  nextArrow:'<button type="button" class="slick-next"><img src="../icons/right.png"></button>',
  responsive: [ {
    breakpoint: 768,
    settings: {
            dots: true,
            arrows:false,
    }
  }
  ]

  
    });
  });
          