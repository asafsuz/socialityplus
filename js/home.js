function init(id){
	
	$.getJSON("api/user/" + id + "/",  function( jsonResponse ){
		console.log(jsonResponse);
		
		setAllData(jsonResponse);
		
	});

	$("#postButton").click(function(){
		alert("fgbh");
		createNewPost();
	});
}

function createNewPost(){
	var user_id = this.data("id");
	var postText = $("#textarea_" + user_id).val();
		$.ajax({
			url: "api/posts/",
			type: "POST",
			dataType: "JSON",
			data: JSON.stringify ({
				post_content: postText.find("textarea").val(),
			}),
			success: function( response ) {
				console.log(response.success);
				if(response.success) {
					//convert div in css to comment div
				}
				else {
				console.log("an error ocurred, please try again later");
				}
			}
		});
}

function setAllData(jsonResponse){
	setCountFriends(jsonResponse.cntFriends);
	setProfilePic(jsonResponse.profilePic);
	setFrontPicture(jsonResponse.coverPic);
	setPosts(jsonResponse.posts);
	
}

function setPosts(data){
	console.log(data);
	$.each(data, function( post_id, post_object ){
		console.log(post_id);
		console.log(post_object);
		builtPost(post_id);
		builtBar(post_id);
		setOnePost(post_id, post_object);
		setComments(post_id, post_object.comments);
		loadLastComments(post_id);
		loadMoreComments(post_id);
		
	});
}

function builtPost(post_id){
	var divPost = "";
	
	divPost += "<div class='myPostDet' id='myPostDet_" + post_id + "'>" +
		"<div class='thePost'>" +
			"<img class='profilePostPic' alt='profilePicture' src=' ' id='profilePostPic_"+ post_id + "'>" +
			"<input type='button' value='x' class='delete'>" +
			"<p class='postName' id='postName_"+ post_id + "'></p>" +
			"<p class='postTimeAgo' id='postTimeAgo_"+ post_id + "'></p>" +
			"<p class='textPost' id='textPost_"+ post_id + "'></p>" +
		"</div>" +
		"<div class='theComments'>" +
			"<div class='bar' id='bar_"+ post_id + "'></div>" +
			"<div class='moreComments' id='moreComments_" + post_id + "'><p>View more comments </p></div>" +
			"<div class='comments' id='comments_" + post_id + "'></div>" +
			"<div class='leaveComment'>" +
				"<img class='noPic' alt='noPicture' src='img/users/thumbs/thumb_008.jpg'>" +
				"<textarea class='leaveCom' placeholder='Leave a comment...'></textarea>" ;
			"</div>" +
		"</div>";
	divPost += "</div>";
	
	$(".posts").append( divPost );
}

function setOnePost(post_id, post_object){
	console.log("posto_bject =" );
	console.log(post_object);
	setNameOwnerPost(post_id, post_object.nameOwnerPost);
	setUserProfilePic(post_id, post_object.userProfilePic);
	setTimePostAgo(post_id, post_object.timePostAgo);
	setTextPost(post_id, post_object.textPost);
	setCountLike(post_id, post_object.countLike);
	setLikeList(post_id, post_object.likeListName);
	//setLikeListName(post_id);
	setStatusLike(post_id, post_object.booleanLike);
}

function setComments(post_id, comments){
	$.each(comments, function( comment_id, comment_object ){
		builtComment(post_id, comment_id);
		setNameOwnerComment(comment_id, comment_object.nameOwnerComment);
		setTimeCommentAgo(comment_id, comment_object.timeCommentAgo);
		setCommentProfilePic(comment_id, comment_object.commentProfilePic);
		setTextComment(comment_id, comment_object.textComment);
	});
}

function builtComment(post_id, comment_id){
	var divComment = "";
	
	divComment += "<div class='comment' id='comment_" + comment_id + "'>";
	divComment += "<img class='profileCommentPic' alt='profilePicture' src=' ' id='profileCommentPic"+ comment_id + "'>" +
	"<p class='commentName' id='commentName_"+ comment_id + "'></p>" +
	"<p class='commentTimeAgo' id='commentTimeAgo_"+ comment_id + "'></p>" +
	"<p class='textComment' id='textComment_"+ comment_id + "'></p>";
	divComment += "</div>";
	
	$("#comments_" + post_id).append( divComment );
}

function builtBar(post_id){
	var divBar = "";
	
	divBar += 
	"<p id='openComments_"+ post_id + "'>Comments </p>" +
	"<p id='like_"+ post_id + "'></p>" +
	"<p class='openLikes' id='openLikes_"+ post_id + "'>Likes</p>" +
	"<span class='likesList' id='likesList_" + post_id + "'></span>" +
	"<span class='countLikes' id='countLikes_"+ post_id + "'></span>" +
	"<div class='clear'></div>"
	
	$("#bar_"+ post_id).append( divBar );

}

function setCountFriends(count){
	$("#countFriends").html("My Friends ( " + count + " )");
}

function setProfilePic(pic){
	$(".MyProfilePicture").attr("src", pic);
} 

function setFrontPicture(cover){
	$("#myCoverPic").attr("src", cover);
	
}

function setNameOwnerPost(id, name){
	$("#postName_" + id).html("<strong>" + name + "</strong>");
}

function setUserProfilePic(id, postPic){
	$("#profilePostPic_" + id).attr("src", postPic);
}

function setTimePostAgo(id, time){
	$("#postTimeAgo_" + id).html(time);
}

function setTextPost(id, text){
	$("#textPost_" + id).html(text);
}

function setCountLike(id, likes){
	$("#countLikes_"+ id).html(likes);
}

function setNameOwnerComment(comment_id, name){
	$("#commentName_" + comment_id).html("<strong>" + name + "</strong>");
}

function setTimeCommentAgo(comment_id, time){
	$("#commentTimeAgo_"+ comment_id).html(time);
}

function setCommentProfilePic(comment_id, pic){
	$("#profileCommentPic"+ comment_id).attr("src", pic);
}

function setTextComment(comment_id, text){
	$("#textComment_"+ comment_id).html(text);
}

//function setLikeListName(post_id){
////	$("#openLikes_"+ post_id).append( $("#likesList_" + post_id) );
//	$("#openLikes_"+ post_id).hover(
//		function(){
//		
//		$( "#likesList_" + post_id ).css("visibility", "visible");
//	},
//		function(){
//		
//		$( "#likesList_" + post_id ).css("visibility", "hidden");
//	}
//	
//	);
//			
//	
//}

function setLikeList(post_id, likes){
	var span = $("#likesList_" + post_id);
	var stringList = "";
	
	$.each (likes, function(index, name){
		console.log(name);
		stringList += name + "<br>";
	});
	
	span.append (stringList);
	
}

function setStatusLike(post_id, booleanStatus){
	var status = (booleanStatus == "true") ? "Unlike": "Like";
	$("#like_"+ post_id).html(status);
}


function loadLastComments(post_id){
	var tempArrayComments = $("#comments_" + post_id).children();
	console.log(tempArrayComments);
	var size = tempArrayComments.length;
	for (var i=size; i>size-3; i--){
		tempArrayComments[i-1].style.display = "block";
		console.log(i);
	}
	if (i>=3)
		$("#moreComments_" + post_id).css("display", "block");
}

function loadMoreComments(post_id){
	$("#moreComments_" + post_id).on ("click", function(){
		//console.log(post_id);
		var tempArrayComments = $("#comments_" + post_id).children();
		var countVisibility = 0;
		$.each(tempArrayComments, function (key, value){
			console.log(value);
			if (value.style.display == "block"){
				countVisibility++;
			}
		});
		
		console.log(tempArrayComments);
		var size = tempArrayComments.length - countVisibility-1;
		console.log(size);
		for (var i=0; i<5; i++){
			console.log(size);
			if (size < 0){
				$("#moreComments_" + post_id).css("display", "none");
				break;
			}else{
			tempArrayComments[size--].style.display = "block";
			}
		}
		
	});
}


/*$(document).ready(function(){
$("input[type=submit]").on( "click", function(){
	alert('helloooo');
	$.ajax({
		url: "api/post/",
		type: "POST",
		dataType: "JSON",
		data: JSON.stringify({
			user_id: $("#user_id").val(),
			post_content: $("#post").val(),
			
		}),
		
		success: function(response){
			console.log(response.message);
			var div;
					div+="<div>"
					div+="<div>"+response.post_content+"</div>"
					div+="<div id=comment ></div>"//css display none 
					div+="<input type=text>"
					div+="<input type=button>" //when click on id comment became display block
			        div+="</div>"
			       $("#commeents").append(div)."style[display:block;]";	
		}	
	});			
	
});		
});*/