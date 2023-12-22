let navToggle = document.querySelector('.navToogle');
let nav = document.querySelector('.header__nav');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('header__nav-show');
})

const swiper = new Swiper('.swiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

});


const swiperCertificate = new Swiper('.certificate__swiper', { 
  loop: true, 
  slidesPerView: 3, 
  spaceBetween: 20, 
  pagination: { 
    el: '.swiper-pagination', 
  }, 
  breakpoints: { 
    640: { 
      slidesPerView: 3, 
    }, 
    480: { 
      slidesPerView: 2, 
    }, 
    360: { 
      slidesPerView: 1, 
    } 
  }, 
});


const accordion = document.querySelector('.accordion');
const accordionBtn = document.querySelectorAll('.accordion__btn');

accordionBtn.forEach.call(accordionBtn, function (accordionButton) {
  accordionButton.addEventListener('click', function () {
    const accordionContent = accordionButton.parentElement.querySelector('.accordion__content');

    accordionButton.classList.toggle('accordion__active');
    accordionContent.classList.toggle('accordion__content-hidden');

    if (accordionContent.classList.contains('accordion__content-hidden')) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
    } else {
      accordionContent.style.maxHeight = null;
    }

  })
})
