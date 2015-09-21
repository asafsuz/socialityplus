<?php
require_once dirname( __FILE__ ) . '/../config/db-tables.php';
require_once dirname(__FILE__) . '/../lib/DB.class.php';

class Posts {
	private $_db;

	public function __construct() {
		$this->_db = DB::getInstance();
	}

	public function createNewPost($details ) {
		$result = $this->_db->query("INSERT INTO posts ( user_id, post_content, post_created)
			VALUES ('$_SESSION[user_id]', '".$details['new_post']."', NOW());");
			$post = $this->_db->query( $result );
			
			return $result;
	}
	
 

	public function getLastPost() {
		$result = $this->_db->query("SELECT * FROM posts ORDER BY post_id  DESC limit 1");
		$getLastPosts = array();
		while($row = $result->fetch_assoc());
		$getLastPosts[] = $row;
		return $getLastPosts;

	}

	public function getPostsByDate(){
	$result = $this->_db->query("SELECT * FROM posts  ORDER BY post_created DESC");
	$postsByDate = array();
	
		while($row = $result->fetch_assoc())
		$postsByDate[] = $row;
		
	return $postsByDate;
	}

	public function getAllPost() {
		$result = $this->_db->query( "SELECT * FROM posts" );
		$posts = array();
		while ( $row = mysqli_fetch_assoc( $result ) )
			$posts[] = $row;
		return $posts;
	}
	
	
}

?>