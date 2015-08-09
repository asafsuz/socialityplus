$(document).ready(function(){
	$("input[type=button]").on( "click", function(){
		$.ajax({
			url: "api/login/",
			type: "POST",
			dataType: "JSON",
			data: JSON.stringify({
				user_email: $("input[name=logemail]").val(),
				user_password: $("input[name=logpassword]").val()	
			}),
			success: function(response){
				console.log(response);
			}	
		});			
	});		
});
