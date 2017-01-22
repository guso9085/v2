$(document).ready(function() {
  particlesJS.load('particles-js', 'particlesjs-config.json', function() {
  console.log('callback - particles.js config loaded');
  });
  $('.container').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: false,
    slidesToShow: 1,
    adaptiveHeight: true,
    draggable: false
  });
  $('#aboutbutton a').click(function(e){
    e.preventDefault();
    $('.container').slick('slickGoTo', 0);
  });
  $('#projbutton a').click(function(e){
    e.preventDefault();
    $('.container').slick('slickGoTo', 1);
  });
  $('.projectz').slick({
    dots: true
  });
});
