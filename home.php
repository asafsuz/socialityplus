<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<title>Social Network - Home page</title>
		<script type="text/javascript" src="http://code.jquery.com/jquery-2.1.4.min.js"></script>
		<script  type="text/javascript" src="js/home.js"></script>
		<link rel="stylesheet" href="style/home.css">
	</head>
	<body>
	<?php include_once("inc/pageTop.php");?>
			<div id="container">
				<section id="owner-post">
					<div class="owner-details"><div id="post-pic" width="20px" height="20px" ><div id="post-user-name">  , Update your status</div>
					<div class="post-content"><textarea class="text-content" placeholder="What's on your mind?"></textarea></div>
					<input type="submit" class="owner-send" value="Post">
					<div id="display_post"></div>
				</section>
					
				<aside id="side-boxes">
					<div class="welcome">
						<div class="box-title">Welcome</div>
						<div class="box-welcome"></div>
					</div> 
					<div class="details">
						<div class="box-title">My Details</div>
						<div class="box-details"></div>
					</div>
					<div class="myfriends">
						<div class="box-title">My Friends</div>
						<div class="box-friends"></div>
					</div>
				</aside>
			</div>
			<p class="footer"><?php include_once("inc/template_pageBottom.php");?></p>
	</body>
</html>


