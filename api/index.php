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
$post = new Posts();


//function to verify if a session was created. If not the user is not aloud to enter home.php
function authenticate() {
	if (!$_SESSION['user_id']) {
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


$app->get( '/user-id/', function() use ($app, $user ) {
	$obUser = $user->getUserById($_SESSION['user_id']);
	echo $users = json_encode($obUser) ; 
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
	echo json_encode( $login->match( $email, $password ) );
});

$app->get( '/login/', function() use ( $app ) {
	if ( $_SESSION ){
		echo json_decode ($_SESSION['user_id']);
	}else{
		echo 'no session';
	}
});

$app->post('/send/', function() use ( $app, $post ) {
	$new_post = json_decode( $app->request->getBody(),true );
	$success = $post->createNewPost( $new_post );
	echo $success;
});

$post = new Posts();
	$app->get( '/send/', function() use ( $post ) {	
	$lastPost = json_encode( $post->getLastPost( $post ));
	echo $lastPost;
	
});

$app->get( '/logout/', function() use ($app, $login) {
	$login = new Login();
	echo $login->logout();
});


$app->run();
?>