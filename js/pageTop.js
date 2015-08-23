$(document).ready(function(){
	$('#logout').on( "click" ,function(){
		$.ajax({
			url: "api/logout",
			type: "GET",
			success: function(response){
				if(response){
					window.location.href = "../index.php";
				}else{
					alert ("You didn't logout");
				}
			}
		})
	})
});