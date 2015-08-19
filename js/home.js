$(document).ready(function(){
	$("input[type=submit]").on( "click", function(){
		alert('yohoo');
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
