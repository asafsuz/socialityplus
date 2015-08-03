$(document).ready(function(){
	$("input[type=button]").on( "click", function(){
		$.ajax({
			url: "api/login/",
			type: "POST",
			dataType: "JSON",
			data: JSON.stringify({
				user_email: $("input[name=email]").val(),
				user_password: $("input[name=password]").val()	
			}),
			success: function(response){
			}	
		});			
	});		
});
