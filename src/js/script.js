 $(document).ready(function(){
    $('.carusel_inner').slick({
     infinite: true,
  speed: 300,
    prevArrow:'<button type="button" class="slick-prev"><img src="icons/left.png>"></button>',
    nextArrow:'<button type="button" class="slick-next"><img src="icons/right.png"></button>',
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
(function($) {
  $(function() {
    
    $('ul.catalog_tabs').on('click', 'li:not(.catalog_tabs-active)', function() {
      $(this)
        .addClass('catalog_tabs-active').siblings().removeClass('catalog_tabs-active')
        .closest('div.container').find('div.catalog_content').removeClass('active').eq($(this).index()).addClass('active');
    });
    
  });
  })
  

  // modal
  $('[data-modal=consultation]').on('click',function() {
    $('.overlay, #consultation').fadeIn('slow'); 
  });
  $('.modal_close').on('click', function(){
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
  });
  // $('.button_mini').on('click', function(){
  //   $('.overlay, #order').fadeIn('slow');
  // });

  $('.button_mini').each(function(i) {
    $(this).on('click', function() {
      $('#order .modal_desc').text($('.catalog-item_subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    });

  });

  // validate
       function valideForms(form){
        $(form).validate({
          rules:  {
            name:"required",
            phone:"required",
            email: {
              required: true,
              email: true
            }
            
          },
          messages: {
            name: "Имя",
            phone:"Введите номер телефона",
            email: {
              required: "Введите вашу почту",
              email: "Введен непрвильный адрес почты"
            }
          }
        });
      };
      
        valideForms('#consultation form');
        valideForms('#order form');
        valideForms('#consultation_form')
  
   
    
      
      
 
  