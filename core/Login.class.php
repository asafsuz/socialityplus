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
       
     	if($query=$query->num_rows){
     		$result=$query->fetch_assoc();
     		
     		$userInfo = $this->_db->query("SELECT * FROM users_info  WHERE user_id =  " . $result['user_id']);
     		$userInfo = $userInfo->fetch_assoc();
     		
     		$_SESSION['login']=$result['user_id'];
     		$_SESSION['userFirstname'] = $userInfo['user_firstname'];
			$_SESSION['userProfPicture'] = $userInfo['user_profile_picture'];
     		
     		
     		return array('success'=>true);
		}else{
			$_SESSION['login'] = null;
			return array('success'=>false);
		}	
	}

	public function logout(){
		if($_SESSION['login'] == true){
		session_destroy();
	}
}
};
?>