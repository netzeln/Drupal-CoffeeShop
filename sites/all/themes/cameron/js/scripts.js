jQuery(document).ready(function($){
  $('#navigation h2').click(function(){
    alert('I am an h2');
  });


  $('.node-coffee-import').click(function(){
    $('.field-name-field-locale').toggle();
    $('.field-name-field-roast').toggle();
    $('.field-name-field-price').toggle();
  });

});
