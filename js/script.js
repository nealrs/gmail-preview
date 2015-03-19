$( document ).ready(function() {

  truncAll();

  $('.i2').on('keyup', function(e) {
    if ([16, 37, 38, 39, 40].indexOf(e.which) >= 0) {
      return;
    }

    trunc($(this));
  });

  $('.i1, .i2').on('mouseover', function(e){
    $(this).addClass('hover');
  });

  $('.i1, .i2').on('mouseout', function(e){
    $(this).removeClass('hover');
  });

});

function trunc(e){
  if (e.val().length > 40){
    var selectionStart = e.get(0).selectionStart;

    e.val( e.val().substring(0, 39)+"..." );

    e.get(0).setSelectionRange(selectionStart, selectionStart);
  }
}

function truncAll(){
  $('.i2').each(function(k,v){
    trunc($(this));
  });
}
