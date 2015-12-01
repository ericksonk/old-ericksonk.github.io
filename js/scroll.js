$(document).ready(function(){
  $('a #home').on('click', function(){
    $('html, body').animate({
      scrollTop: $('div #home').offset().top},
      'slow');
  });
});
