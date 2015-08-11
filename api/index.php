<?php
require 'Slim/Slim.php';
\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();

$app->contentType( 'application/json' );

require_once dirname( __FILE__ ) . '/../core/User.class.php';
require_once dirname( __FILE__ ) . '/../core/Login.class.php';
require_once dirname( __FILE__ ) . '/../core/Posts.class.php';
$user = new User();
$login = new Login();

function authenticate() {
	
	if (!$_SESSION['login']) {
		global $login;
		echo json_encode (array ( "error" => "no session"));
		//echo "no session";
		$app->halt (401);
	}
}

$app->get( '/', function(){
	global $app;
	$app->halt(401);
});

$app->get( '/user/', function() use ( $user ) {
	echo json_encode( $user->getAllUsers() );
});

$app->get( '/user/:id/', function( $id ) use ( $user ) {
	echo json_encode( $user->getUserById( $id ) );
});

$app->post( '/user/', function() use ( $user, $app ) {
	$new_user = json_decode( $app->request->getBody(),true );
	$success = $user->createNewUser( $new_user );
	echo $success;
});

$app->delete( '/user/:id/', function( $id ) use ( $user ) {
	echo $user->deleteUser( $id );
});

$app->put( '/user/:id/', function( $id ) use ( $user, $app ) {
	$details = json_decode( $app->request->getBody() );
	echo $user->updateUser( $id, $details );
	
});

$app->post( '/login/', function() use ( $app, $login ) {
	$email = $app->request->post('logname');
	$password = $app->request->post('logpassword');
	if ($login->match()){
		echo json_encode (array( "success" => true));
		define( 'USER_ID', $_SESSION['user_id']);
	} else {
		echo json_encode (array( "success" => false));
	}
});

$post = new Posts();
$app->post('/post/', function() use ($post, $app ) {
	$new_post = json_decode( $app->request->getBody(),true );
	 $success = $post->createNewPost( $new_post, $app );
	var_dump($success);
});
$app->run();
?>