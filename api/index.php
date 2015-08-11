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

//function to verify if a session was created. If not the user is not aloud to enter home.php
function authenticate() {
	
	if (!$_SESSION['login']) {
		global $login;
		echo json_encode (array ( "error" => "no session"));
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
	 $email = $app->request->post('email');
	 $password = $app->request->post('password');
	 $success = $login->match( $email, $password );
	if ( $success )
		echo json_encode (array( "success" => true));
	else
		echo json_encode (array( "success" => false));
});

$post = new Posts();
$app->post('/post/', function() use ($post, $app ) {
	$new_post = json_decode( $app->request->getBody(),true );
	 $success = $post->createNewPost( $new_post, $app );
	var_dump($success);
});
$app->run();
?>