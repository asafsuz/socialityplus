$(document).ready(function(){
	$('#logout').on( "click" ,function(){
		$.ajax({
			url: "api/logout",
			type: "GET",
			success: function(){
				
				window.location.href = "index.php";
			}
		})
	})
});