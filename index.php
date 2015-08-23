<!DOCTYPE html>
<html lang="en">
<!-- Here is the first page of the program index.php-->
	<head>
<!-- At the head of the page are the require for script files used in the page
     and the links to the style files used here -->
		<meta charset="UTF-8" />
		<title>Social Network</title>
		<script type="text/javascript" src="http://code.jquery.com/jquery-2.1.4.min.js"></script>
		<script  type="text/javascript" src="js/register.js"></script>
		<script  type="text/javascript" src="js/login.js"></script>
		<link rel="stylesheet" href="style/header.css">
		<link rel="stylesheet" href="style/index.css">
		<link rel="stylesheet" href="style/footer.css">
		<link rel="stylesheet" href="style/register.css">
	</head>
<body>
<!-- This page is formed by three parts: the heder of the page, so the php code calls this header to include -->
<?php include_once("inc/template_pageTop.php");?>	
<!-- Here start the main page of the index.php -->
	<div id="pageMain">
		<div id="mainMiddle">
			<div id="pageMainLeft">
				<section class="upperLeft">
					<h1>Welcome</h1>
					<h2>To Sociality+, John Bryce's social network</h2>
				</section>
				<section class="lowerLeft">
					<h2>Share your memories, connect with others, make new friends.</h2>
				</section>
			</div>
			<div id="pageMainRight">
				<section class="userRegist">
					<h2>Sign up</h2>
					<input type="text" id="firstname" name="firstname" placeholder="Firstname" /><br><span class="firstnameError"></span>
					<input type="text" id="lastname" name="lastname" placeholder="Lastname" /><br><span class="lastnameError"></span>
					<input type="email" id="email" name="email" placeholder="Email" /><br><span class="emailError"></span>
					<input type="password" id="pass1" name="password" placeholder="Password" /><br><span class="passwordError"></span>
					<input type="password" id="repass" name="repassword" placeholder="Repeat Password" /><br><span class="repasswordError"></span>
					<input class="button" type="button" value="REGISTER"><br>
				</section>
				<section id="login-form">
					<input type="email" id="loginEmail" name="logemail" placeholder="Email">
					<input type="password" id="loginPass" name="logpassword" placeholder="Password" >
					<input type="button" class="logbutton" value="LOGIN"><span class="loginError"></span>
				</section>
			</div>
		</div>
	</div>
<!-- At the bottom of the page comes the statment to include the footer part of the index.php page -->
<?php include_once("inc/template_pageBottom.php");?>
	
