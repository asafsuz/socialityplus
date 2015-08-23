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
					$('.loginError').text('Wrong email or password');
					
				}else{
					window.location.href= 'home.php';
				}	
			}
		})
	})
});