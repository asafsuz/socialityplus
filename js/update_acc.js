$(document).ready(function(){
	
	var idUser = $(this).data("id");
		$.ajax({
			url: "api/user/:user_id",
			type: "get",
	 		dataType: "json",
			success: function( user ) {
				getDetails(user)	
			}
		})

	function getDetails(user){
		var user = user[0];
		var form = $("#editUser");
		form.find( "input[name=user_id]" ).val( user['100042']  );
		form.find( "input[name=fname]" ).val( user['user_firstname']  );
		form.find( "input[name=lname]" ).val( user['user_lastname'] );
		//form.find( "input[name=user_password]" ).val( user['user_password'] );
		button = "<input type='button' class='edit' name='edit' value='edit'></td>";
		$( "#editUser" ).append(button);
	};
});