$(document).ready(function() {
  particlesJS.load('particles-js', 'particlesjs-config.json', function() {
  console.log('callback - particles.js config loaded');
  });
  $('.projectz').slick({
    dots: true,
    draggable:false
  });
  $('.hackathons').slick({
    dots: true,
    draggable:false
  });
});
