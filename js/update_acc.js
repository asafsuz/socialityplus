$(document).ready(function(){
	
	$.ajax({
		type: "GET",
		url: "api/login",
		success: function( details ){
			$user_id = details;
			console.log ($user_id);
		}
	});
	/*function populate( details ) {
		var form = $("#acc-profile-fields #fields");
		form.find("input[name=firstname]").val( details.user_firstname );
		form.find("input[name=lastname]").val( details.user_lastname );
		form.find("input[name=email]").val( details.user_email );*/
		
	
	$.ajax({
		  url: "api/user-id/",
		  type: "GET",
		  dataType: "JSON",
		  success: function( detail ){
			  var form = $("#acc-profile-fields #fields");
			  find("input[name=fname]").html(detail.user_firstname);
			  find("input[name=lame]").html(detail.user_lastname);
		}
	})
});
				
				
				/*
				$.each(details, function(detail){
					form.find("input[name=fname]").val(detail.user_firstname);
					form.find("input[name=lame]").val(detail.user_lastname);
					form.find("input[name=email]").val(detail.user_email);
					form.find("input[name=bdate]").val(detail.user_birthday);
					form.find("input[name=gender]").val(detail.user_gender);
					form.find("input[name=website]").val(detail.user_website);
					form.find("input[name=aboutme]").val(detail.user_about);
				});		
			},
			error: function(){
				alert('error loading data');
			}
			function getUserDetails( user_id ) {
		$.getJSON( "api/user-id/" + user_id + "/", function( response ){
			success: populate( response );
			echo (response.success);
		});*/
		


	
	 
