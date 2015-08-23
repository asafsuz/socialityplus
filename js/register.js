
$(document).ready(function(){
/*
 * The script here send the data of the new user through the rest to User.class
 * where the data is inserted to the database
 */
	$(".userRegist").on( "click", "input[type=button].button",function(){
		$.ajax({
/*
 * The follow url indicates to where the script needs to send the request in the server
 */
			url: "api/user/",
/*
 * The method for the sending of data is post
 */
			type: "POST",
			dataType: "JSON",
			data: JSON.stringify({
/*
 * Here is the data that came from the input fields in the index.php file. 
 */
				user_firstname: $("input[name=firstname]").val(),
				user_lastname: $("input[name=lastname]").val(),
				user_email: $("input[name=email]").val(),
				user_password: $("input[name=password]").val(),	
			}),
/*
 * The respond received from the server includes the data that was send back from the server.
 */
			success: function(response){
				console.log(response);
				
			}	
		});
/*
 * The following rows are responsible to reset the data entered to the input fields.
 */
		$("input[name=firstname]").val('');
		$("input[name=lastname]").val('');
		$("input[name=email]").val('');
		$("input[name=password]").val('');
		$("input[name=repassword]").val('');
	});		
/*
 * The validateEmail determinate the regular expression to verify the validity of the email address in the registration form
 */
	function validateEmail(email){
		var emailReg =  /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
		return emailReg.test(email);
	}
/*
 * Verify if the field for firstname is not empty in the registration form.
 * It contains an event that is triggered when the user pass to the following field.
 */
	$('#firstname').blur(function() {
		var error = $('.firstnameError').text;
		if(!$(this).val()) {
			$('.firstnameError').text('You must type your first name here!');
		}else{
			$('.firstnameError').text('');
		}
	});
	$('#firstname').focus(function() {
		$('.firstnameError').text('');
	});
	
/*
 * Verify if the field for lastname is not empty in the registration form
 * It contains an event that is triggered when the user pass to the following field.
 */
	$('#lastname').blur(function() {
		var error = $('.lastnameError').text;
		if(!$(this).val()) {
			$('.lastnameError').text('You must type your last name here!');
		}else{
			$('.lastnameError').text('');
		}
	});
	$('#lastname').focus(function() {
		$('.lastnameError').text('');
	});
	
/*
 * Verify if the field for email is not empty and if the address is a valid one in the registration form
 * as the function validateEmail above determine.
 */
	$('#email').blur(function() {
		var error = $('emailError').text
		if(!$(this).val()) {
			$('.emailError').text('You must type your email address!')
		}else if (!validateEmail($("#email").val())) {
			$('.emailError').text('Not a valid address! Please type again.')
		}else{
			$('.emailError').text('');
		}
	});
	$('#email').focus(function() {
		$('.emailError').text('');
	});
	
/*
 * Verify if the field for password is not empty in the registration form
 * It contains an event that is triggered when the user pass to the following field.
 */
	$('#pass1').blur(function() {
		var error = $('.passwordError').text;
		if(!$(this).val()) {
			$('.passwordError').text('You must type a password!');
		}else{
			$('.passwordError').text('');
		}
	});
	$('#pass1').focus(function() {
		$('.passwordError').text('');
	});

/*
 * Verify if the field for retype password is not empty and if there it match with the former field in the registration form
 * It contains an event that is triggered when the user pass to the following field.
 */
	$('#repass').blur(function() {
		var error = $('.repasswordError').text;
		if($(this).val() != ($('#pass1').val())) {
			$('.repasswordError').text('The password don\'t match! Try again!');
		}else{
			$('.repasswordError').text('');
		}
	});
	$('#repass').focus(function() {
		$('.repasswordError').text('');
	});
});

