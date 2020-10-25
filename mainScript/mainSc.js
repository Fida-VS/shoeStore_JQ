$(document).ready(function(){
	
	 var intervalCsaHead = setInterval(csaHead,4000);
	 function csaHead(){
	var currentImage = $('.img.curry');
		var currentImageIndex = $('.img.curry').index();
		var nextImageIndex = currentImageIndex + 1;
		var nextImage = $('.img').eq(nextImageIndex);
		currentImage.fadeOut(1000);
		currentImage.removeClass('curry');
		
		if(nextImageIndex == ($('.img:last').index()+1)){
			$('.img').eq(0).fadeIn(1000);
			$('.img').eq(0).addClass('curry');
		} else{
			nextImage.fadeIn(1000);
			nextImage.addClass('curry');
		}
		}
});
$('.wshoes').mouseover(function(){
	$('#mainText').css("display", "none");
	$('#wshoesText').css("display", "block");
});
	
$('.wshoes').mouseout(function(){
	$('#mainText').css("display", "block");
	$('#wshoesText').css("display", "none");
});	
	
$('.cshoes').mouseover(function(){
	$('#mainText').css("display", "none");
	$('#cshoesText').css("display", "block");
});	
	
$('.cshoes').mouseout(function(){
	$('#mainText').css("display", "block");
	$('#cshoesText').css("display", "none");
});		
	
$('.mshoes').mouseover(function(){
	$('#mainText').css("display", "none");
	$('#mshoesText').css("display", "block");
});	

$('.mshoes').mouseout(function(){
	$('#mainText').css("display", "block");
	$('#mshoesText').css("display", "none");
});	

