<?php
require_once dirname(__FILE__) . '/../lib/DB.class.php';

class Posts {
	private $_db;

	public function __construct() {
		$this->_db = DB::getInstance();
	}

	public function createNewPost($details ) {
		$result = $this->_db->query("INSERT INTO posts( user_id, post_content ,post_created )
			                         VALUES (203,'".$details['new_post']."',NOW())");
		return $result;
	}

	public function getLastPost() {
		$result = $this->_db->query("SELECT * FROM posts ORDER BY post_id DESC limit 1");
		while($row = $result->fetch_assoc($result));
		return $row;

	}

	public function deletePost( $task_id ) {
		$result = $this->_db->query( "DELETE FROM posts WHERE post_id = $task_id" );
		return $result;
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