$(document).ready(function() {
  var flavors = ["vanilla bean", "cookie dough", "rocky road"];
  flavors.forEach(function(flavor) {
    $("p").append(flavor + "   ");
    console.log(flavor);
  });
});
