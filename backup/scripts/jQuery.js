$(document).ready(function(){
  // setInterval(function(){
    // METHOD 1
    // $('.flashing').toggleClass('active');
    // METHOD 2 (this one moves the text as the span element disapears)
    // $('.active').fadeOut('6000').delay('2000').fadeIn('6000')
  // }, 6000);
  // METHOD 3 (uses jQ UI)
  setInterval(function(){
    $('.active').animate({ color: "#000000" }, 2000).delay('50').animate({color: "#F8F8FF" }, 1500).delay(200);
  }, 3000);
});
