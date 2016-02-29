$(document).ready(function() {
	
	$('.selectme input:checkbox').click(function() {
	    $('.selectme input:checkbox').not(this).prop('checked', false);
	}); 

});