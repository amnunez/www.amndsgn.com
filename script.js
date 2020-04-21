$(document).ready(function() {
  $(".menu-btn").click(function() {
    $(".menu-btn").toggleClass("open");
  });
});
$(document).ready(function() {
  $(".navMenu").hide();
  $(".menu-btn").click(function() {
    $(".navMenu").slideToggle("slow");
  });
});
