$(document).ready(function() {
    $('#base').mouseenter(function() {
        $('.headingtxt').hide();
		$('.arrow_left').hide;
		$('.headingtxt_base').show();
		$('.arrow_left_on').show();
	});
	
	$('#base').mouseleave(function() {
		$('.headingtxt_base').hide();
		$('.arrow_left_on').hide();
        $('.headingtxt').show();
		$('.arrow_left').show();
    });
	
	$('#high').mouseenter(function() {
        $('.headingtxt').hide();
		$('.arrow_mid').hide();
		$('.headingtxt_high').show();
		$('.arrow_mid_on').show();
    });
	
	$('#high').mouseleave(function() {
		$('.headingtxt_high').hide();
		$('.arrow_mid_on').hide();
		$('.headingtxt').show();
		$('.arrow_mid').show();
	});
	
	$('#camp').mouseenter(function(){
		$('.headingtxt').hide();
		$('.arrow_right').hide();
		$('.headingtxt_camp').show();
		$('.arrow_right_on').show();
	});
	
	$('#camp').mouseleave(function() {
        $('.headingtxt_camp').hide();
		$('.arrow_right_on').hide();
		$('.headingtxt').show();
		$('.arrow_right').show();
    });
});