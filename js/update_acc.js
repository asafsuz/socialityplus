$(document).ready(function(){
	
/*	$.ajax({
		type: "GET",
		url: "api/login",
		success: function( details ){
			$user_id = details;
		}
	});*/
	
	$.ajax({
		  url: "api/user-id/",
		  type: "GET",
		  dataType: "JSON",
		  success: function( response ){
			  console.log (response)
			 $("input.fname").val(response.user_firstname);
			 $("input.lname").val(response.user_lastname);
			 $("input.email").val(response.user_email);
			 $("input.bday").val(response.user_bday);
			 $("input.gender").val(response.user_gender);
			 $("input.location").val(response.user_location);
			 $("input.website").val(response.user_website);
			 $("input.about").val(response.user_about);
			}
		})
	
	$(".button").on( "click", "input[type=button].button",function(){
		$.ajax({
			url: "api/user/" + user_id + "/",
			type: "PUT",
			data: JSON.stringify(details),
			success: function( response ) {
				console.log( response );
			}
		})
	})
});		


	
	 
