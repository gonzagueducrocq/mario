$(document).ready(function() {
  $(document).on('keydown', function(e) {

var position = $("#mario").position().left;

    if (e.keyCode == 39) {
      position = position + 10;
    }
    else if (e.keyCode == 37) {
      position = position - 10;
    }
    if (position <0 ) {
      position = 0;
    }

    var tailleMax = $("#plateau").width() - $("#mario").width();

    if ( position > tailleMax ) {
      position = $("#plateau").width() - $("#mario").width();
    }

$("#mario").css('left', position +"px");

//var position = $("#mario").position().top;
//  if (e.keyCode == 38) {
//    position = position + 50
//  }
//  $("#mario").css('top', position +"px");

    console.log(e.keyCode);
 }) ;
});
