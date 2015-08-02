$(document).ready(function(){
	var firstname = $('#firstname');
	var lastname = $('#lastname');
	var email = $('#email');
	var pass1 = $('#pass1');
	var repass = $('#repass');
	
	
	registration.submit(function(){
		if(validFirstname() & validLastname() & validEmail() & validPassword() & validRepass()){
			return true;
		}else{
			return false;
		}
		}
	});
	
	function validFirstname(){
		if(firstname.val() == ''){
			firstname.addClass("error");
			firstname.text("You must type a name.");
			firstname.addClass("error");
			return false;
		}else{
			firstname.removeClass("error");
			return true;
		}
	}
	
	
	
	
	
	
	name.email
	function validateEmail(){
		var a = email.val();
		var regex = /^[a-zA-Z0-9]+{2,}@[a-zA-Z0-9-._]{2,}.com|[a-zA-Z0-9-._]{2,}@[a-zA-Z0-9-_]{2,}.[a-zA-Z0-]{2,3}$/;
		
	}
	
	
});