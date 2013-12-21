$(document).ready(function() {
    $('#base').mouseenter(function() {
        $('.headingtxt').hide();
		$('.arrow_left').hide();
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
		$('.headingtxt_high').show();
    });
	$('#high').mouseleave(function() {
		$('.headingtxt_high').hide();
		$('.headingtxt').show();
	});
	
	$('#camp').mouseenter(function(){
		$('.headingtxt').hide();
		$('.headingtxt_camp').show();
	});
	$('#camp').mouseleave(function() {
        $('.headingtxt_camp').hide();
		$('.headingtxt').show();
    });
});