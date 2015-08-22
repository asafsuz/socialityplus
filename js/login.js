//ajax that send data to server from input in index.php
$(document).ready(function(){
	 $("input[type=button].logbutton").on( "click" ,function(){
		$.ajax({
			url: "api/login/",
			type: "POST",
			dataType: "JSON",
			data: {
				email: $("input[name=logemail]").val(),
				password: $("input[name=logpassword]").val(),
			},
			
			success: function(response){
				if( !response.login ){
					alert("No Session");
					
				}else{
					/*var error = $('.loginError').text;
					$('.loginError').text('Wrong email or password');
					$("input[name=logemail]").val('');
					$("input[name=logpassword]").val('');*/
					window.location.href= 'home.php';
				}	
			}
		})
	})
});