$(document).ready(function() {
		
   		$('#base').mouseenter(function() {
      		$('div.headingtxt').hide()
			$('div.arrow_left').removeClass('arrow_left');
			$('div.headingtxt_base, img.arrow_left_on').show();
		});
	
		$('#base').mouseleave(function() {
			$('div.headingtxt_base, img.arrow_left_on').hide();
        	$('div.arrow_left').addClass('arrow_left');
			$('div.headingtxt').show()
				
    	});
	
		$('#high').mouseenter(function() {
        	$('div.headingtxt').hide();
			$('div.arrow_mid').removeClass('arrow_mid');
			$('div.headingtxt_high, .arrow_mid_on').show();
   		 });
		$('#high').mouseleave(function() {
			$('div.headingtxt_high, img.arrow_mid_on').hide();
			$('div.arrow_mid').addClass('arrow_mid');
			$('div.headingtxt').show();
		});
	
		$('#camp').mouseenter(function(){
			$('div.headingtxt').hide();
			$('div.arrow_right').removeClass('arrow_right');
			$('div.headingtxt_camp, img.arrow_right_on').show();
		});
		
		$('#camp').mouseleave(function() {
        	$('div.headingtxt_camp, img.arrow_right_on').hide();
			$('div.arrow_right').addClass('arrow_right');
			$('div.headingtxt, .arrow_right').show();
    	});
});
