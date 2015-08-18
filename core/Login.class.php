<?php

session_start();
require_once dirname( __FILE__ ) . '/../lib/DB.class.php';

class Login {
	private $_db;

	public function __construct() {
		$this->_db = DB::getInstance();
	}

	private function createSession( $user ){
		foreach ( $user as $key => $value )
			$_SESSION[$key] = $value;
	}
	
	public function match($email, $password) {
           $query = $this->_db->query("SELECT * FROM users
	    	WHERE user_email = '$email'  AND user_password = '".md5($password)."'");
           
     	if($query->num_rows){
     	$_SESSION['login']=true;
     	$this->createSession($query->fetch_assoc());
		return true;
		{
			return false;
		}	
	}
	
}
}

?>