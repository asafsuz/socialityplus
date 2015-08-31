  <?php include_once("inc/pageTop.php");?>
			<div id="container">
					<section id="owner-post">
						<div class="owner-details"><div id="post-pic" width="20px" height="20px" ></div><div id="post-user-name">  , Update your status</div></div>
						<div class="post-content"><textarea class="text-content" placeholder="What's on your mind?"></textarea></div>
						<input type="submit" class="owner-send" value="Post">
						<div id="display_post">
							<div id="post_sender_details">
								<img alt="" src="">
								<div id="delet-post"><?php session_start();  echo $_SESSION['user_id'];?></div>
								<div id="post_content"></div>
							</div>
							<div id="comment_sender_details">
								<input id="input-comment">
							</div>
						</div>
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
			<?php include_once("inc/template_pageBottom.php");?>



