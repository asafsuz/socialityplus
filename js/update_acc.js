$(document).ready(function(){
	function getUserDetails( id ) {
		$.ajax({
			url: "api/get/" + user_id + "/",
			type: "GET",
			data: JSON.stringify(details),
			success: function( response ) {
				alert ('response');
			}
	})
	}
	
	 
});