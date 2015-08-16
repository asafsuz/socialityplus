<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<title>Social Network - Account page</title>
		<script type="text/javascript" src="http://code.jquery.com/jquery-2.1.4.min.js"></script>
		<script  type="text/javascript" src="js/account.js"></script>
		<link rel="stylesheet" href="style/account.css">
	</head>
	<body>
	<?php include_once("inc/pageTop.php");?>
			<div id="container">
				<section id="member-account">
					<div class="title"><img src="imgs/anonymous.jpg" width="20px" height="20px" >General Settings</div>
					<div class="page-title">Edit your profile information</div>
					<div class="fname">First Name<input type="text" name="fname"></div>
				</section>
				<aside id="settings"></aside>
			</div>
			
			<p class="footer"><?php include_once("inc/template_pageBottom.php");?></p>
	</body>
</html> 