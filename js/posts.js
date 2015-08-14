$(document).ready(function(){
	var $text-content = $(''.text-content');
	$((".owner-send").on( "click", function(){
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
				/*var section;
						div+="<section>"
						div+="<section>"+response.post_content+"</div>"
						div+="<section id=comment ></section>"//css display none 
						div+="<input type=text>"
						div+="<input type=button>" //when click on id comment became display block
				        div+="</div>"
				       $.(#comments).append(section)."style[display:block;]";*/	
			}	
		});			
		
	});		
});
