$(document).ready(function(){
	$('#nav').localScroll(800);
	$('#intro').parallax("50%", 0.1);
	$('#second').parallax("50%", 0.1);
	$('.bg').parallax("50%", 0.4);
	$('#third').parallax("50%", 0.3);

});

$(document).ready(function() {
//Preloader
$(window).load(function() {
preloaderFadeOutTime = 500;
function hidePreloader() {
var preloader = $('.spinner-wrapper');
preloader.fadeOut(preloaderFadeOutTime);
}
hidePreloader();
});
});

$(function(){ // this replaces document.ready
  $(window).on("load", function(){
    $('.spinner-wrapper').fadeOut('slow', function() {
      $(this).remove();
    });
  });
}); 