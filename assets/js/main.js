console.log("Site desenvolvido por Allan Souza https://fb.com/ASDSAllan");
$(".btn-scrool").click(function(o){o.preventDefault();var t=$(this).attr("href"),l=($("nav").innerHeight(),$(t).offset().top);$("html, body").animate({scrollTop:l},1500)});
var $containerWidth = $(window).width();
if ($containerWidth <= 992) {
    $('.btn-scrool').click(function (e) { 
        e.preventDefault();
        if($('.navbar-collapse').hasClass('show')){
            $('.navbar-collapse').removeClass('show');
            $('.navbar-toggler').addClass('collapsed');
        }
        
    });
}