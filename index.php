<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<title>Social Network</title>
		<script type="text/javascript" src="http://code.jquery.com/jquery-2.1.4.min.js"></script>
		<script  type="text/javascript" src="js/register.js"></script>
		<link rel="stylesheet" href="style/style.css">
		<link rel="stylesheet" href="style/register.css">
	</head>
<body>
<?php include_once("inc/template_pageTop.php");?>	
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
					<input type="text" id="firstname" name="sirstname" placeholder="Firstname" /><br><span class="firstnameError"></span>
					<input type="text" id="lastname" name="lastname" placeholder="Lastname" /><br><span class="lastnameError"></span>
					<input type="email" id="email" name="email" placeholder="Email" /><br><span class="emailError"></span>
					<input type="password" id="pass1" name="password" placeholder="Password" /><br><span class="passwordError"></span>
					<input type="password" id="repass" name="repassword" placeholder="Repeat Password" /><br><span class="repasswordError"></span>
					<input class="button" type="button" value="REGISTER"><br>
				</section>
				<section class="userLogin">
					<input type="email" name="email" placeholder="Email">
					<input type="password" name="username" placeholder="Password" >
					<input class="button" type="button" value="LOGIN">
				</section>
			</div>
		</div>
	</div>
<?php include_once("inc/template_pageBottom.php");?>
	
</body>
</html>