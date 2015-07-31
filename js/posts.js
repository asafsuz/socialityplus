$(document).ready(function(){
	$("input[type=button]").on( "click", function(){
		alert('helloooo');
		$.ajax({
			url: "api/post/",
			type: "POST",
			dataType: "JSON",
			data: JSON.stringify({
				post_content: $("input[type=text]").val(),
			
			}),
			success: function(response){
				console.log(response.message);
				
			}	
		});			
	});		
});
