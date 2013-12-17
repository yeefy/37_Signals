$(document).ready(function(e) {
    $('#base').mouseenter(function() {
        $('.headingtxt').hide();
		$('.headingtxt_base').show();
		$('.arrow_left').addClass('arrow_left_on');
	});
	
	$('#base').mouseleave(function() {
		$('.headingtxt_base').hide();
        $('.headingtxt').show();
		$('.arrow_left').removeClass('arrow_left_on');
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