jQuery(window).scroll(function() {
    var x = jQuery(this).scrollTop(); // Pos
    var r = 30; // Rate
    jQuery('body').css('background-position', 'center ' + parseInt(x/r) + 'px'); // Switch x polarity to reverse direction
});

// navbar

$("nav ul li").click(function(){
  var xcoord = $(this).data("xcoord");
  
  $("nav div").stop().animate({marginLeft:xcoord}, 500, "easeInOutExpo");
  $(this).addClass("active");
  $("nav ul li").not(this).removeClass("active");
  
});