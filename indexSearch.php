<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<title>Social Network</title>
		<script src="http://code.jquery.com/jquery-2.1.4.min.js"></script>
		
		<link rel="stylesheet" href="style/style.css">
	</head>
<body>
<?php include_once("inc/template_pageTop.php");?>
	<div id="pageMain">
		<div id="searchDiv">
			<input type="text" name="search" id="search" placeholder="Search" ><br>
			<input class="button" type="button" value="SEARCH">
		</div>
		<div id="search_results"></div>
	</div>
<script src="js/search.js"></script>
<?php include_once("inc/template_pageBottom.php");?>
</body>
</html>