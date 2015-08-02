$(document).ready(function(){
	$("input[type=submit]").on( "click", function(){
		alert('helloooo');
		$.ajax({
			url: "api/post/",
			type: "POST",
			dataType: "JSON",
			data: JSON.stringify({
				post_content: $("input[type=textarea]").val(),
				
			
			}),
			success: function(response){
				console.log(response.message);
				
			}	
		});			
	});		
});
