$( document ).ready(function() {

  truncAll();

  $('.i2').on('keyup', _.debounce(function (e) {
    trunc($(this));
  }, 200));

  $('.i1, .i2').on('mouseover', function(e){
    $(this).addClass('hover');
  });

  $('.i1, .i2').on('mouseout', function(e){
    $(this).removeClass('hover');
  });

});

function trunc(e){
  if (e.val().length > 40){
    e.val( e.val().substring(0, 39)+"..." );
  } /*else {
      e.val( e.val().replace(/...$/, '') );
    }*/
}

function truncAll(){
  $('.i2').each(function(k,v){
    trunc($(this));
  });
}
