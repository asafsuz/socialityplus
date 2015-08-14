<?php include_once("inc/pageTop.php");?>
    
	<div id="profile_mainPage">
		<div id="profile_halfUpper">
				<div id="coverImage"><img src="imgs/cover.jpg" height="230px" width="980px">
			<div id="profileImage"></div>
			</div>
		</div>
		<?php 
		session_start();
		?>
		<div id="profile_halfBottom">
		
			<div id="posts-table">
				<div id="post">
					<div id="status-details"><img src=""> Asaf, Update your status</div>
					<span id="user_id"  value='162534'></span>
					<textarea id="post-content"  placeholder="What's on your mind?"></textarea>
					<input type="submit" id="submit" value="POST">
				</div>
				<div id="commeents"></div>
			</div>
				
		<aside> class="sideMenu">
			 <div id="about">
			 
				 <div>
			<p> About:</p>
					</div>
				
				 <div>
			<p>  Location: </p>
					</div>
				
				 <div>
			<p> Born:  </p>  
					</div>
				
				 <div>
			<p>  Gender: </p>  
					</div>
			
			     <div>
			<p>   Homepage:  </p>  
					</div>
				<div>
			<p>  Facebook: </p>   
					</div>
				<div>
			<p> Bio:	</p>
					</div>	
			</div>
	   </aside>
	</div>	
<?php include_once("inc/template_pageBottom.php");?>
