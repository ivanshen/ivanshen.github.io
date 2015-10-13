jQuery(function($) {
    var divs = $('.Intro_1');
    $(window).on('scroll', function() {
        var st = $(this).scrollTop();
        divs.css({ 
            'margin-top' : -(st/6)+"px", 
            'opacity' : 1 - st/200
        }); 
    });
});