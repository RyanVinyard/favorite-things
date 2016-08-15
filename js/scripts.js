$(document).ready(function() {
  $("form#yourfavestuff").submit(function(event) {
    event.preventDefault();
    var favefood = ($("input#favefood").val());
    var favecolor = ($("input#favecolor").val());
    var favemusic = ($("input#favemusic").val());
    console.log(favefood + favemusic + favecolor);
    var yourfavestuff = [favefood, favecolor, favemusic];
    console.log(yourfavestuff);
    var second = yourfavestuff[1];
    var first = yourfavestuff[0];
    var third = yourfavestuff[2];
    var newfavestuff = [second, first, third];
    console.log(newfavestuff);
    $("ul").append("<li></li>" + second);
    $("ul").append("<li></li>" + first);
    $("ul").append("<li></li>" + third);
  });

  });
