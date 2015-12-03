$(document).ready(function(){
  console.log('hi kristine :)')
  $(".show-home").click(function(){
    $('html, body').animate({
        scrollTop: $("#k-home").offset().top},
        'slow');
  });
  $(".folio").click(function(){
    $('html, body').animate({
        scrollTop: $("#k-portfolio").offset().top},
        'slow');
  });
  $(".contact-me").click(function(){
    $('html, body').animate({
        scrollTop: $("#k-contact").offset().top},
        'slow');
  });
});
