$(document).ready(function(){
	$("input[type=submit]").on( "click", function(){
		alert('helloooo');
		$.ajax({
			url: "api/post/",
			type: "POST",
			dataType: "JSON",
			data: JSON.stringify({
				user_id: $("#user_id").val(),
				post_content: $("#post").val(),
				
			}),
			
			success: function(response){
				console.log(response.message);
				var div="";
						div+="<div>"
						div+="<div>"+response.post_content+"</div>"
						div+="<div id=comment ></div>"//css display none 
						div+="<input type=text>"
						div+="<input type=button>" //when click on id comment became display block
				        div+="</div>"
				       $("#commeents").append(div);	
			}	
		});			
		
	});		
});
