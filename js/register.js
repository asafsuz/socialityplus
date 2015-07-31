$(document).ready(function(){
	$("input[type=button]").on( "click", function(){
		$.ajax({
			url: "api/user/",
			type: "POST",
			dataType: "JSON",
			data: JSON.stringify({
				user_firstname: $("input[name=firstname]").val(),
				user_lastname: $("input[name=lastname]").val(),
				user_email: $("input[name=email]").val(),
				user_password: $("input[name=password]").val(),	
			}),
			success: function(response){
				console.log(response.message);
				
			}	
		});			
	});		
});

