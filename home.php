<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<title>Social Network - Profile page</title>
		<script type="text/javascript" src="http://code.jquery.com/jquery-2.1.4.min.js"></script> 
	</head>
	<body>
<?php include_once("inc/pageTop.php");?>
    
		<div id="profile_halfBottom">
		
			<section class="posts-table">
				<div id="post">
					<div id="status-details"><img src=""> Asaf, Update your status</div>
					<textarea id="post-content"  placeholder="What's on your mind?"></textarea>
					<input type="submit" id="submit" value="POST">
				</div>
				<div id="commeents"></div>
			</section>
		</div>
		
	
<?php include_once("inc/template_pageBottom.php");?>
</body>
</html>


