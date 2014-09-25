jQuery(window).scroll(function() {
    var x = jQuery(this).scrollTop(); // Pos
    var r = 30; // Rate
    jQuery('body').css('background-position', 'center ' + parseInt(x/r) + 'px'); // Switch x polarity to reverse direction
});

// navbar

