$(document).ready(function(){
	$("input[type=submit]").on( "click", function(){
		var newpost = $('textarea.text-content').val();
		if ($.trim(newpost) != "") {
			$.ajax({
				url: "api/send/",
				type: "POST",
				dataType: "JSON",
				data: JSON.stringify({
					//user_id: $("#user_id").val(),
					new_post: $(".text-content").val(),
				}),
				success: function(response){
					console.log(success);
				} 
			})
			$("textarea.text-content").val('');
			
		}
		
		
		 $("#display-post").append( );
		  $.ajax({
				url: "api/send/:id",
				type: "GET",
				dataType: "JSON",
				success: function( posts ){
					var div = "";
					$.each( posts, function(key, post  ) {
						div += '<div class="display-post" style="border-bottom: 2px solid black; padding: 5px;" id="postId_'+ id +'">';
						div += '<p>' + post.post_content + '</p>';
						div += '</div>';
					}),
					$("#display-post").append( div );
				},
		         error:function(){
					alert('Error loading post' );
				}
			})
		})
		
});
/*	
			
		}
		
		
		$('textarea.text-content').val('')
		/*var div;
					div+="<div>",
					div+="<div>"+ response.post_content + "</div>",
					div+="<div id=new_post ></div>",//css display none 
					div+="<input type=text>",
					div+="<input type=button>",//when click on id comment became display block
					div+="</div>",*/
