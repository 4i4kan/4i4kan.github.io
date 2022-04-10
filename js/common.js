$(document).ready(function() {
  $('.getroom__choose_arrow').click(function(event) {
    if($('.getroom__side').hasClass('one')) {
      $('.getroom__choose_arrow').not($(this)).removeClass('active');
      $('.getroom__choose_text').not($(this).next()).slideUp(600);
    }


    $(this).toggleClass('active').next().slideToggle(600);
  });
});



new Swiper('.swiper', {

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  mousewheel: {
    sensitiviti: 1,
  }

});


let anchors = document.querySelectorAll('.navigation__item a[href*="#"]');

for (anchor of anchors) {
  if (anchor) {
    anchor.addEventListener('click', function(e){
      e.preventDefault();
      anchorId = this.getAttribute('href');
      document.querySelector(anchorId).scrollIntoView({
        behavior: 'smooth', block: 'start'
      })
    })
  }
}
const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});
close.addEventListener('click', () => {
    menu.classList.remove('active');
});
