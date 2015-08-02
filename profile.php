<?php include_once("inc/pageTop.php");?>
    
	<div id="profile_mainPage">
		<div id="profile_halfUpper">
			<div id="coverImage"></div>
			<div id="profileImage"></div>
		</div>
		<?php 
		session_start();
		?>
		<div id="profile_halfBottom">
		
			<div id="posts-table">
				<div id="status">
					<div id="status-details"><img src=""> Asaf, Update your status</div>
					<span id="user_id"  value='162534'></span>
					<textarea id="post"  placeholder="What's on your mind?"></textarea>
					<input type="submit" id="submit" value="POST">
				</div>
			</div>
			<div id="commeents"></div>
		</div>
			
			<div id="sideMenu">
			
		
			
			</div>
		</div>
	</div>
<?php include_once("inc/template_pageBottom.php");?>

