var circle = $(".circle");
var h1 = $("h1");

circle.hover(function() {
  h1.css("display", "block");
}, function() {
  h1.css("display", "none");
})
