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
					$("#display_post").append(div);
					/*var div;
					div+="<div>",
					div+="<div>"+ response.post_content + "</div>",
					div+="<div id=new_post ></div>",//css display none 
					div+="<input type=text>",
					div+="<input type=button>",//when click on id comment became display block
					div+="</div>",*/
					
				}
			})
		}
	})
});
/*		
			
		}
		
		$('div#display_post').append(response);
		$('textarea.text-content').val('')
*/
