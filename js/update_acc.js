$(document).ready(function(){
	
		$.ajax({
			type: "GET",
			url: "api/login",
			success: function( details ){
				$user_id = details;
				//console.log ($user_id);
			}
			
			$("div#general").on('click', function(){
				var user_id = $user_id;
				var firstname = $("name=fname").val();
				var lastname = $("name=lname").val();
				$.ajax({
					type: "GET",
					url: "api/user/" + user_id + "/",
					dataType: JSON,
					success: function( details ){
						console.log(details);
						$.each(details, function(detail){
							form.find("input[name=fname]").val(detail.user_firstname);
							form.find("input[name=lame]").val(detail.user_lastname);
					}
				})
			});
		});
				
				
				/*
				$.each(details, function(detail){
					form.find("input[name=fname]").val(detail.user_firstname);
					form.find("input[name=lame]").val(detail.user_lastname);
					form.find("input[name=email]").val(detail.user_email);
					form.find("input[name=bdate]").val(detail.user_birthday);
					form.find("input[name=gender]").val(detail.user_gender);
					form.find("input[name=website]").val(detail.user_website);
					form.find("input[name=aboutme]").val(detail.user_about);
				});		
			},
			error: function(){
				alert('error loading data');
			}*/
		});
		


	
	 
