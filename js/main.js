
// animation pour le bouton burger et le menu

$(document).ready(function (){
    $('.menu-toggler').on('click', function (){
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function (){
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $('#monter').on('click', function (){
        $('html, body').scrollTop(0);
    });

    AOS.init({
        easing: 'ease',
        duration: 1800,
        // once: true
    });
});

// $('videolink').magnific-popup({
//     type: 'inline',
//     midClick:true
// })