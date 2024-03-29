
$(document).ready(function () {
  new WOW().init();
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
      320: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  })


  $('.navbar-toggler').on('click', () => {

    if ($('.menu__icon').attr('uk-icon') === "icon: menu; ratio: 2") {
      $('.menu__icon').attr('uk-icon', "icon: close; ratio: 2");
      $('.navbar.navbar-expand-lg').attr('style', 'box-shadow: 0 1rem 3rem rgba(0, 0, 0, .5)!important;');
    } else {
      $('.menu__icon').attr('uk-icon', "icon: menu; ratio: 2");
      $('.navbar.navbar-expand-lg').attr('style', 'box-shadow:none')
    }
  })

});

// preloader
setTimeout(() => {
  document.querySelector('.loader').style.display = "none"
}, 500)

// after focusing out the email input-label will not merge with the input text if it is not valid
function force_focus() {
  if (document.getElementById('email').value !== '') {
    document.getElementById('email-label').setAttribute('style', 'bottom: 1.5rem !important;');
  } else {
    document.getElementById('email-label').removeAttribute('style', 'bottom: 1.5rem !important;');
  }
}

window.addEventListener('scroll', e => {
  let scroll = window.scrollY;
  if (scroll > 40) {
    if (window.innerWidth < 768) {
      document.getElementById("logo").style.height = "60px"
      document.getElementById("navbar").classList.add('shadow-lg');
    } else {
      document.getElementById("logo").style.height = "80px";
      document.getElementById("navbar").classList.add('shadow-lg');
    }
  } else {
    if (window.innerWidth < 768) {
      document.getElementById("logo").style.paddingRight = "0px";
      document.getElementById("logo").style.height = "70px";
      document.getElementById("navbar").classList.remove('shadow-lg');
    } else {

      document.getElementById("logo").style.paddingRight = "0px";
      document.getElementById("logo").style.height = "90px";
      document.getElementById("navbar").classList.remove('shadow-lg');
    }
  }
})