<?php
require 'Slim/Slim.php';
\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();

$app->contentType( 'application/json' );

require_once dirname( __FILE__ ) . '/../core/User.class.php';
require_once dirname( __FILE__ ) . '/../core/Login.class.php';
require_once dirname( __FILE__ ) . '/../core/Posts.class.php';
$user = new User();

$app->get( '/user/', function() use ( $user ) {
	echo json_encode( $user->getAllUsers() );
});

$app->get( '/user/:id/', function( $id ) use ( $user ) {
	echo json_encode( $user->getUserById( $id ) );
});

$app->post( '/user/', function() use ( $user, $app ) {
 $new_user = json_decode( $app->request->getBody(),true );
  $success = $user->createNewUser( $new_user );
 if ( !$success ){
  echo "there is a problem with the api conection";
 }
 else{
  echo "User Created"; 
 }
});
/*$app->post( '/user/', function() use ( $user, $app ) {
	$new_member = json_decode( $app->request->getBody(), true );
	echo $success = $user->createNewUser($new_member, $app);
	//print_r( $success);
	if ($success)
		echo "1";
	else
		echo "0";
	
});*/

$app->delete( '/user/:id/', function( $id ) use ( $user ) {
	echo $user->deleteUser( $id );
});

$app->put( '/user/:id/', function( $id ) use ( $user, $app ) {
	$details = json_decode( $app->request->getBody() );
	echo $user->updateUser( $id, $details );
	
});

$app->post( '/login/', function() use ( $app ) {
	$login = new Login();
	$username = $app->request->post('username');
	$password = $app->request->post('password');

	var_dump( $login->match( $username, $password ) );
});

$post = new Posts();
$app->post('/post/', function() use ($post, $app ) {
	$new_post = json_decode( $app->request->getBody(),true );
	 $success = $post->createNewPost( $new_post, $app );
	var_dump($success);
});
$app->run();
?>