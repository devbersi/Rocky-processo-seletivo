$(document).ready(function () {
    $(".hamburguer").click(function (){
        $(this).toggleClass("active");
        $(".menu").toggleClass("active");
    });
});

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
        $('header').addClass("active");
    }
    else {
        $('header').removeClass("active")
    }
});