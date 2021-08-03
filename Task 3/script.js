$(function(){

    $(window).scroll(function(){
    var scrolled = $(window).scrollTop();
    if (scrolled > $(document).height()/2) $('.to-top').fadeIn('slow');
    if (scrolled < $(document).height()/2) $('.to-top').fadeOut('slow');
    });

    $('.to-top').click(function () {
    $("html, body").animate({ scrollTop: "0" },  500);
    });

});