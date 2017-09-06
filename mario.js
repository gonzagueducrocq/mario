$(document).ready(function() {

var tabPosition = ["", "p1", "p2", "p3"];
var currentPosition = 0;

  $(document).on('keydown', function(e) {

var position = $("#mario").position().left;
var classSens = "";

    if (e.keyCode == 39) {
      position = position + 10;
      currentPosition = currentPosition + 1;

      if (currentPosition > 3) {
        currentPosition = 1;
      }

    }
    else if (e.keyCode == 37) {
      classSens = "reverse";
      position = position - 10;
      currentPosition = currentPosition + 1;

      if (currentPosition > 3) {
        currentPosition = 1;
      }

    }
    if (position <0 ) {
      position = 0;
      currentPosition = 0;
    }

    var tailleMax = $("#plateau").width() - $("#mario").width();

    if ( position > tailleMax ) {
      position = $("#plateau").width() - $("#mario").width();
    }

$("#mario").css('left', position +"px");
$("#mario").attr('class', classSens + " " +tabPosition[currentPosition]);

if (e.keyCode == 38 ) {
  $("#mario").addClass("up");
setTimeout(function()
      { $("#mario").removeClass("up"); }, 250);
      if (position >= 490 && position <= 510) {
          $("#pointIntUtilise").css('display', "block");
      }
}

if (position >= 200 && position <= 228) {
  $("#mario").addClass("dead");
  $("#gameOver").css('display', "block");
  }

 }) ;
});
