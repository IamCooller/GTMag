$(document).ready(function () {
	
	$('.slider-main').slick({
		dots: true,
		infinite: true,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 7000,
		fade: true
	});		
	
	$('.scrollbar-inner').niceScroll({
		cursorwidth:12,
		cursoropacitymin:1,
		cursorcolor:'#54779E',
		cursorborder:'none',
		cursorborderradius:4,
		autohidemode:'leave',
		background:'#fdfbee'		
	});
	
	$('.buy-more').niceScroll("div.productslist",{
		cursorwidth:12,
		cursoropacitymin:1,
		cursorcolor:'#54779E',
		cursorborder:'none',
		cursorborderradius:4,
		autohidemode:'leave',
		background:'#f7eef7'
	});
	
	$('.serificate-slider').slick({
		dots: false,
		infinite: true,
		arrows: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 7000,
		responsive: [
			{
			  breakpoint: 1100,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true
				
			  }
			},
			{
			  breakpoint: 700,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		  ]
	});	
	
	setTimeout(function() {
		$('select, input[type="number"]').styler();
	}, 100);
	
	$(document).on('click','.tabs-nav a',function(e){
		$this = $(this); 
		$('.tabs-nav a').removeClass('active');
		$this.addClass('active');
		$href = $this.attr('href');
		$('.tabs-data').slideToggle( "slow", function() {
			$('.tabs .tab').removeClass('active');
			$($href).addClass('active');
			$('.tabs-data').slideToggle( "slow", function() {
				$('.scrollbar-inner').getNiceScroll().remove()
				$('.scrollbar-inner').niceScroll({
					cursorwidth:12,
					cursoropacitymin:1,
					cursorcolor:'#54779E',
					cursorborder:'none',
					cursorborderradius:4,
					autohidemode:'leave',
					background:'#fdfbee'		
				});
			});
		});
		return false;
	});		
	
	$('.slider-images-big').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-images-small'
	});
	
	$('.slider-images-small').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider-images-big',
		dots: false,
		focusOnSelect: true
	});	
	$( ".forms-open" ).click(function() {
		$(".forms-main").addClass('forms-active');
	});
	$( ".close-forms" ).click(function() {
		$(".forms-main").toggleClass('forms-active');
	});
	
});
