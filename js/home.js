$(document).ready(function(){
	
	$.ajax({
		type: "GET",
		url: "api/login",
		success: function( details ){
			$user_id = details;
			console.log ($user_id);
		}
	});
	
	var userFirstName;
	var userLastName;
	var userAbout;
	var userBirtDay;
	var userEmail;
	var userCreated;
	var userProfilePic;
	var userSecretPic;
	var userSecretAbout;
	var profilName;
	//Using the session user id to get all the information about the user , injecting the relevant details into the home.php page 
	$.ajax({
		url: "api/user-id/",
		type: "GET",
		dataType: "JSON",
		success: function( posts ){
	  	var details = $.json_decode(posts.response);
	  	
	  		userFirstName = details.user_firstname;
			userLastName =details.user_lastname;
			userAbout =details.user_about;
			userBirtDay =details.user_birthdate;
			userEmail =details.user_email;
			userCreated =details.user_created;
			userProfilePic =details.user_profile_picture;
			userSecretPic =details.user_secret_picture;
			userSecretAbout = details.user_secret_about;
			profilName = details.user_firstname+" "+user_lastname;
			
		    $(".box-welcome").append(userFirstName);
			$(".box-welcome").append(userSecretPic);
			$("post-user-name").append(profilName );
			$(".box-details").append(profilName,userBirtDay,userEmail);
			}
		});


	//this ajax comand send the content of the text area to DB 
 $("input[type=submit]").on ("click", function(){
		var newpost = $('textarea.text-content').val();	
		if ($.trim(newpost) != "") {
			var div = ""; 
			div += "<p>" + newpost + "</p>"	
			$("#post_content").append(div);
			$("#display_post").fadeIn();
			
		$.ajax({
			url: "api/send/",
			type: "POST",
			dataType: "JSON",
			data: JSON.stringify({	
			 new_post: $(".text-content").val(),
			 clear_status: $(".text-content").val('')
			}),
			success: function(response){
			
				console.log(response);
			}
		
		})
	}
}); 




	/*	 $("#display-post").append( );
		  $.ajax({
				url: "api/send",
				type: "GET",
				dataType: "JSON",
				success: function( posts ){
			  	var posts = $.parseJSON(posts.response);
					var div = "";
					$.each( posts, function(key, post  ) {
						div += '<div class="display-post" style="border-bottom: 2px solid black; padding: 5px;" data_id="'+post.post_id +'">';
						div += '<p>' + content + '</p>';
						div += '</div>';
					}),
					$("#display-post").append( div );
				},
		         error:function(){
					alert('Error loading post' );
				}
			})*/
		
		
	});
	
			
