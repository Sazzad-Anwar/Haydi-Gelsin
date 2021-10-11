
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

// Function for scroll to down and top effect for header
function scrollFunction() {
  if (document.body.scrollTop >= 40 || document.documentElement.scrollTop >= 40) {
    document.getElementById("logo").style.height = "80px";
    document.getElementById("navbar").classList.add('shadow-lg');
  } else {
    document.getElementById("logo").style.paddingRight = "0px";
    document.getElementById("logo").style.height = "90px";
    document.getElementById("navbar").classList.remove('shadow-lg');
  }
}
if (window.innerWidth > 768) {
  window.onscroll = function () { scrollFunction() };
}
