<?php
require_once dirname( __FILE__ ) . '/../config/config.php';
require_once dirname( __FILE__ ) . '/../lib/DB.class.php';

if (isset ($_POST{'search_term'})) {
	$search_term = mysqli_real_escape_string("DB_DATABASE_NAME", htmlentities ($_POST['search_term']));
	
	if(!empty($search_term)){
		echo $search_term;
	}
}

?>