<?php
class DB {
	private static $instance = NULL;
	
    public static function getInstance() {
		/*if ( !self::$instance ) {
			self::$instance = new mysqli("localhost", "root", "", "socialityplus");
		}*/
		if( !self::$instance ) {
			self::$instance = new mysqli ( "localhost" , "root" , "" );
			self::$instance->select_db("socialityplus");
		}
		return self::$instance;
    }

    private function __construct(){}
    private function __clone(){}
}
?>

			