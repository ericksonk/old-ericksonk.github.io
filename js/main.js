$('#portfolio').on('click', function(){
  $('html, body').animate({
    scrollTop: $('#portfolio').offset().top
  }, 'slow');
});
