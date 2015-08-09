<?php

session_start();
require_once dirname( __FILE__ ) . '/../lib/DB.class.php';

class Login {
	private $_db;

	public function __construct() {
		$this->_db = DB::getInstance();
	}

	private function createSession( $details ){
		foreach ( $details as $key => $value )
			$_SESSION[$key] = $value;
	}
	
	public function match( $email, $password ) {
		$user = $this->_db->query( "SELECT user_id, user_email FROM users
		WHERE user_email = 'user_email'  AND user_password = '".md5('user_password')."'");
	
			if ( $user->num_rows ) {
				$_SESSION['login'] = true;
				$this->createSession( $user->fetch_assoc() );
				echo 'A session was created';
				//header("Location: home.php");
			}else{
				echo 'no seesion was created';
			}
	}
};
?>