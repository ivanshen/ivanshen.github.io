function isMobile() {
return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
if (isMobile()){
jQuery(function($) {
    var divs = $('.About_me');
    divs.css({
        'opacity' : 1
        });
    });
}
    

if (!isMobile()) {
jQuery(function($) {
    var divs = $('.About_me');
    $(window).on('scroll', function() {
        var st = $(this).scrollTop();
        divs.css({ 
            'opacity' : st/150
        }); 
    });
});
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

}