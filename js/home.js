$(document).ready(function(){
	
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
	
	$.ajax({
		url: "api/user-id/",
		type: "GET",
		dataType: "JSON",
		success: function( posts ){
	  	var details = $.json_decode(posts.responseText);
	  	
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
	$("input[type=submit]").on( "click", function(){
		var newpost = $('textarea.text-content').val();
		if ($.trim(newpost) != "") {
			$.ajax({
				url: "api/send/",
				type: "POST",
				dataType: "JSON",
				data: JSON.stringify({	
				 new_post: $(".text-content").val(),
				 clear_status: $(".text-content").val('')
				}),
				success: function(response){
					console.log(success);
				} 
			})	
	
		};
	});	

		 $("#display-post").append( );
		  $.ajax({
				url: "api/send/:id",
				type: "GET",
				dataType: "JSON",
				success: function( posts ){
			  	var posts = $.parseJSON(posts.responseText);
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
			})
		
});
	
			
		
		
	/*	('textarea.text-content').val('')
		var div;
					div+="<div>",
					div+="<div>"+ response.post_content + "</div>",
					div+="<div id=new_post ></div>",//css display none 
					div+="<input type=text>",
					div+="<input type=button>",//when click on id comment became display block
					div+="</div>",*/
