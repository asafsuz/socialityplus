<?php
require_once dirname( __FILE__ ) . '/../lib/DB.class.php';
require_once dirname( __FILE__ ) . '/../config/db-tables.php';


class User {
	private $_db;

	public function __construct() {
		$this->_db = DB::getInstance();
	}

	public function createNewUser($details) {
		$insertNewUser = $this->_db->query
			(" INSERT INTO users (user_email, user_password)
			VALUES('".$details['user_email']."', '".md5($details['user_password'])."')" );
			if($insertNewUser){
				$newUserId = $this->_db->query
				("SELECT LAST_INSERT_ID()");
				$newUserIds = mysqli_fetch_assoc ($newUserId)['LAST_INSERT_ID()'];
				$insertUserInfo = $this->_db->query
				(" INSERT INTO users_info (user_id, user_firstname, user_lastname) 
				VALUES ('$newUserIds','".$details['user_firstname']."','".$details['user_lastname']."')");
			return $insertUserInfo;
			return $insertNewUser;
		}
	}
	

	public function getAllUsers() {
		$users = $this->_db->query( "SELECT * FROM" . TBL_UINFO );
		$users = array();
		while ( $row = $users->fetch_assoc() )
			$users[] = $row;
		return $users;
	}

	
	public function getUserById( $id ) {
		$users = $this->_db->query( "SELECT * FROM users_info WHERE user_id = '". $_SESSION['user_id']."'" );
		$details = $users->fetch_assoc();
		unset ($details['password']);
		return $details;
	}
	
	public function getUserByName( $user_nickname ){
		$users = $this->_db->query( "SELECT * FROM" . TBL_UINFO . "WHERE username LIKE '%search_term%'" );
		$details = $users->fetch_assoc();
		return $details;
	}
	
	public function getUserByMail( $user_email ){
		$users = $this->_db->query( "SELECT * FROM users WHERE user_email = '".$details['user_email']."'" );
		$details = $users->fetch_assoc();
		return $details;
	}

	public function deleteUser( $id ) {
		return $this->_db->query( "DELETE FROM" . TBL_UINFO . "WHERE user_id = $id" );
	}
}
?>
