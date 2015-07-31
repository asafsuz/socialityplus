$(document).ready(function(){
	$("input[type=button]").on( "click", function(){
		$.ajax({
			url: "api/user/",
			type: "GET",
			dataType: "JSON",
			data: JSON.stringify({
				/*nickname: $("input[name=username]").val(),*/
				user_email: $("input[name=email]").val(),
				user_password: $("input[name=password]").val()	
			}),
			success: function(response){
				console.log(response.message);
			}	
		});			
	});		
});
