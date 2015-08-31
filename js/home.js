$(document).ready(function(){
	
	$.ajax({
		type: "GET",
		url: "api/login",
		success: function( details ){
			$user_id = details;
			//$(".box-welcome").html($user_id);
		}
	});

	//Using the session user id to get all the information about the user , injecting the relevant details into the home.php page 
	$.ajax({
		url: "api/user-id/",
		type: "GET",
		dataType: "JSON",
		success: function( response ){
		 	
		    	$(".box-welcome").html(response.user_birthdate);
		    	//$(".box-welcome").append"<br/><div>"+response.userSecretPic+"</div>");
				$("post-user-name").html(response.user_firstname+" "+response.user_lastname );
				$(".box-details").html(response.user_firstname+" "+response.user_lastname, response.user_birthdate, response.user_email);
		    	
		    	
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




	 $("#display-post").append();
		  $.ajax({
				url: "api/send",
				type: "GET",
				dataType: "JSON",
				success: function( posts ){
			  	var posts = JSON.parse(posts.response);
					var div = "";
					$.each( posts, function(key, post) {
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
	
			
