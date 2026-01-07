$(document).ready(function(){
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-xmark fa-bars');
        $('nav').toggleClass('nav-toggle');
    })
    $(window).on('scroll load',function(){
 $('.fa-bars').removeClass('fa-xmark').addClass('fa-bars');
        $('nav').removeClass('nav-toggle');
    });
})