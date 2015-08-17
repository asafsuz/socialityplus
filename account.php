<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<title>Social Network - Account page</title>
		<script type="text/javascript" src="http://code.jquery.com/jquery-2.1.4.min.js"></script>
		<script  type="text/javascript" src="js/update_acc.js"></script>
		<link rel="stylesheet" href="style/account.css">
	</head>
	<body>
	<?php include_once("inc/pageTop.php");?>
			<div id="container">
				<section id="member-account">
					<div class="title"><img src="imgs/anonymous.jpg" width="20px" height="20px" >General Settings</div>
					<div class="page-title">Edit your profile information</div>
					<div id="acc-profile-names">
						<table id="names">
						<tr><td>First Name</td></tr>
						<tr><td>Last Name</td></tr>
						<tr><td>Email</td></tr>
						<tr><td>Born Date</td></tr>
						<tr><td>Gender</td></tr>
						<tr><td>Location</td></tr>
						<tr><td>Website</td></tr>
						<tr><td>About me</td></tr>
						</table>
					</div>
					<div id="acc-profile-fields">
						<table id="fields">
						<tr><td><input type="text" name="fname"><br>Enter your first name</td></tr>
						<tr><td><input type="text" name="lname"><br>Enter your last name</td></tr>
						<tr><td><input type="email" name="email"><br>E-mail will not be displayed</td></tr>
						<tr><td><input type="date" name="bdate"><br>Select the date you were born</td></tr>
						<tr><td><select name="gender"><option value="male">Male</option><option value="female">Female</option></select><br>Select your gender (male or female)</td></tr>
						<tr><td><input type="text" name="location"><br>Where do you live?</td></tr>
						<tr><td><input type="text" name="website"><br>If you have a blog, personal page, enter it.</td></tr>
						<tr><td><textarea rows="4" cols="50"></textarea><br>About me (160 characters or less)</td></tr>
						<tr><td><input type="button" value="Save Changes" class="button"></td></tr>
						</table>
					</div>
	
					
				</section>
				
				<aside id="settings">
					<div class="set">Settings</div>
					<div class="set">General</div>
					<div class="set">Profile Picture</div>
					<div class="set">Password</div>
				</aside>
				
			</div>
			
			<p class="footer"><?php include_once("inc/template_pageBottom.php");?></p>
	</body>
</html> 