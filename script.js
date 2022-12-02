const menu = document.querySelector('nav');

function activeScroll() {
  menu.classList.toggle('ativo', scrollY > 0);
}
window.addEventListener('scroll', activeScroll)



$('.container-slider').slick({
    dots: true,
    arrows:false,
    speed:1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover:false,
    responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }],
    });



    $('.container-slider2').slick({
        dots: true,
        arrows:false,
        speed:1000,
        slidesToShow: 4,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover:false,
        responsive: [
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                      }
                    }],
        });



    