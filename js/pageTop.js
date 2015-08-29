/*
 * This script refers to the page header of the site, except the page header of the 
 * index.php page.
 * The document ready confirm that the all script was loaded.
 */
$(document).ready(function(){
/*
 *  The following event triggers the button "logout" at the top of the page.
 * The function send a request to the method get in the api, there is a call
 * to the logout function.
 */	
	$('#logout').on( "click" ,function(){
		$.ajax({
			url: "api/logout/",
			type: "GET",
			success: function(response){
/*
 *  If the response received from the server is affirmative, the user is
 * redirect to the index.php page.
 */
				//if(response.success){
				if(response.success == true){
					window.location.href = "index.php";
/*
 *  else, the user receive a alert window that the logout peocess didn't success.
 */
				}else{
					alert ("something went wrong!");
				}
			}
		})
	})
});
/*
 * Here is the request to get all the details of the user in session.
 */

