$(document).ready(function() {
  function resizeImage(imageWidth) {
    $("#profile_picture").css("height", imageWidth);
  }
  
  $(window).resize(function() {
    resizeImage($("#profile_picture").width());
  });
  
  resizeImage($("#profile_picture").width());
});