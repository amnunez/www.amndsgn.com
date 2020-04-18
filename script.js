$(document).ready(function() {
  $(".cross").hide();
  $(".navMenu").hide();
  $(".hamburger").click(function() {
    $(".navMenu").slideToggle("slow", function() {
      $(".hamburger").hide();
      $(".cross").show();
    });
  });
  $(".cross").click(function(){
    $(".navMenu").slideToggle("slow", function(){
      $(".cross").hide();
      $(".hamburger").show();
    });
  });
});
