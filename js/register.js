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

	function validateEmail(email){
		var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
		var valid = emailReg.test(email);
		if(!valid) {
	        return false;
	    } else {
	    	return true;
	    }
	}

	$('#firstname').blur(function() {
		var error = $('.firstnameError').text;
		if(!$(this).val()) {
			$('.firstnameError').text('You must type your first name here!');
		}else{
			$('.firstnameError').text('');
		}
	});
	$('#lastname').blur(function() {
		var error = $('.lastnameError').text;
		if(!$(this).val()) {
			$('.lastnameError').text('You must type your last name here!');
		}else{
			$('.lastnameError').text('');
		}
	});
		
	$('#email').blur(function() {
		var error = $('emailError').text
		var emailReg = /^[a-zA-Z0-9-\._]{2,}+@[a-zA-Z0-9-._]{2,}+\.[a-zA-Z0-9-]{2,}@[a-zA-Z0-9-_]{2,}.[a-zA-Z0-]{2,3}.il$/ ;
		var valid = emailReg.test();
		if(!$(this).val()) {
			$('.emailError').text('You must type your email addres!')
		}else if ($(this).val != valid) {
			$('.emailError').text('Not a valid address! Please type again.')
		}else{
			$('.emailError').text('');
		}
	});

	$('#pass1').blur(function() {
		var error = $('.passwordError').text;
		if(!$(this).val()) {
			$('.passwordError').text('You must type a password!');
		}else{
			$('.passwordError').text('');
		}
	});
	
	$('#repass').blur(function() {
		var error = $('.repasswordError').text;
		//console.log($('#pass1').val());
		if($(this).val() != ($('#pass1').val())) {
			$('.repasswordError').text('The password don\'t match! Try again!');
		}else{
			$('.repasswordError').text('');
		}
	});
	
	});
	

