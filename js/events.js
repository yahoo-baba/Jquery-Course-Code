$(document).ready(function(){
  $('#box').scroll(function(){
    console.log("You are scrolling");
  });


  $(window).unload(function(){
    console.log("You are Resizing Window");
  });
});
