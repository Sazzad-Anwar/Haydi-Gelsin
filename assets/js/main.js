// preloader

setTimeout(()=>{
    document.querySelector('.loader').style.display="none"
},500)

function scrollFunction() {
    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
      document.getElementById("navbar").style.height = "5rem";
      document.getElementById("logo").style.height = "5.5rem";
    } else {
      document.getElementById("navbar").style.height = "auto";
      document.getElementById("logo").style.height = "100px";
    }
}
if(window.innerWidth > 768){
    window.onscroll = function() {scrollFunction()};
}

