$(document).ready(function(){
/*
 * The following script creates an event on click on the button logbo that triggers the script
 */
	 $("input[type=button].logbutton").on( "click" ,function(){
/*
 * As the button was clicked, there is a request sended to the server
 */
		$.ajax({
/*
 * The request is redirected to the api/login method
 */
			url: "api/login/",
/*
 * The type of the method is post
 */
			type: "POST",
			dataType: "JSON",
			data: {
/*
 * The data sended is taken from the input fields from the login part of the index.php file.
 */
				email: $("input[name=logemail]").val(),
				password: $("input[name=logpassword]").val(),
			},
/*
 * If there is no match in the process taken place in the api/login, the user receive a warning
 */
			success: function(response){
				if( !response.login ){
					$('.loginError').text('Wrong email or password');
/*
 * If the match processed in the api/login return a true response, the user is redirected to the home.php page.
 */					
				}else{
					window.location.href= 'home.php';
				}	
			}
		})
	})
});