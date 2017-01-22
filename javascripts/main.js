$(document).ready(function() {
  particlesJS.load('particles-js', 'particlesjs-config.json', function() {
  console.log('callback - particles.js config loaded');
  });
  $('.container').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });
  $('#aboutbutton a').click(function(e){
    e.preventDefault();
    $('.container').slickGoTo(0);
  });
});
