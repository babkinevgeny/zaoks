$('.hamburger').click(function(){
  // $('header').addClass('blur');
  $('.navigation').fadeIn().css('display', 'flex');
})
$('.navigation__btn').click(function(){
  // $('header').removeClass('blur');
  $('.navigation').fadeOut();
});


$('.btn--form').click(function() {
  $('.popupform').slideDown().css('display','flex');
});
$('.btn-form-close').click(function() {
  $('.popupform').slideUp();
});

$('#input-file').change(function() {
  if ($(this).val() != '') $(this).prev().text('Файл загружен');
  else $(this).prev().text('Загрузить файл');
});
