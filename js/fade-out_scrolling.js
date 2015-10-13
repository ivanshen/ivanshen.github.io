jQuery(function($) {
    var divs = $('.About_me');
    $(window).on('scroll', function() {
        var st = $(this).scrollTop();
        divs.css({ 
            'opacity' : st/150
        }); 
    });
});