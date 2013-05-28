$(document).ready(function() {
  $(".change").click(function(){
    // $(this).css('background-color' : 'black');
    // $(this).css('background-color', "black");
    $(this).toggleClass('clicked');
  });
});