$(document).ready(function(){
	
	$('#admin_page_controller').hide();
	$('#text_event_name').text("Error: Invalid event name ");
	var eventName = getURLParameter("q");
	if (eventName != null && eventName !== '' ) {
		$('#text_event_name').text("Event name: " + eventName);
		
	}

});



angular.module('teamform-admin-app', ['firebase'])
.controller('AdminCtrl', ['$scope', '$firebaseObject', '$firebaseArray', function($scope, $firebaseObject, $firebaseArray) {
	
	// TODO: implementation of AdminCtrl
	
	// Initialize $scope.param as an empty JSON object
	$scope.param = {};
	
	// Call Firebase initialization code defined in site.js
	initalizeFirebase();


	//Facebook login
	// First, we perform the signInWithRedirect.
// Creates the provider object.
var provider = new firebase.auth.FacebookAuthProvider();
// You can add additional scopes to the provider:
provider.addScope('email');
provider.addScope('user_friends');
// Sign in with redirect:
auth.signInWithRedirect(provider)
////////////////////////////////////////////////////////////
// The user is redirected to the provider's sign in flow...
////////////////////////////////////////////////////////////
// Then redirected back to the app, where we check the redirect result:
auth.getRedirectResult().then(function(result) {
  // The firebase.User instance:
  var user = result.user;
  // The Facebook firebase.auth.AuthCredential containing the Facebook
  // access token:
  var credential = result.credential;
}, function(error) {
  // The provider's account email, can be used in case of
  // auth/account-exists-with-different-credential to fetch the providers
  // linked to the email:
  var email = error.email;
  // The provider's credential:
  var credential = error.credential;
  // In case of auth/account-exists-with-different-credential error,
  // you can fetch the providers using this:
  if (error.code === 'auth/account-exists-with-different-credential') {
  	auth.fetchProvidersForEmail(email).then(function(providers) {
      // The returned 'providers' is a list of the available providers
      // linked to the email address. Please refer to the guide for a more
      // complete explanation on how to recover from this error.
  });
  }
});



var refPath, ref, eventName;

eventName = getURLParameter("q");
refPath = eventName + "/admin/param";	
ref = firebase.database().ref(refPath);

	// Link and sync a firebase object
	
	$scope.param = $firebaseObject(ref);
	$scope.param.$loaded()
	.then( function(data) {
		
			// Fill in some initial values when the DB entry doesn't exist			
			if(typeof $scope.param.maxTeamSize == "undefined"){				
				$scope.param.maxTeamSize = 10;
			}			
			if(typeof $scope.param.minTeamSize == "undefined"){				
				$scope.param.minTeamSize = 1;
			}
			
			// Enable the UI when the data is successfully loaded and synchornized
			$('#admin_page_controller').show(); 				
		}) 
	.catch(function(error) {
			// Database connection error handling...
			//console.error("Error:", error);
		});
	
	
	refPath = eventName + "/team";	
	$scope.team = [];
	$scope.team = $firebaseArray(firebase.database().ref(refPath));
	
	
	refPath = eventName + "/member";
	$scope.member = [];
	$scope.member = $firebaseArray(firebase.database().ref(refPath));
	
	

	$scope.changeMinTeamSize = function(delta) {
		var newVal = $scope.param.minTeamSize + delta;
		if (newVal >=1 && newVal <= $scope.param.maxTeamSize ) {
			$scope.param.minTeamSize = newVal;
		} 
		
		$scope.param.$save();

		
	}

	$scope.changeMaxTeamSize = function(delta) {
		var newVal = $scope.param.maxTeamSize + delta;
		if (newVal >=1 && newVal >= $scope.param.minTeamSize ) {
			$scope.param.maxTeamSize = newVal;
		} 
		
		$scope.param.$save();
		
		
	}

	$scope.saveFunc = function() {

		$scope.param.$save();
		
		// Finally, go back to the front-end
		window.location.href= "index.html";
	}
	
	
}]);