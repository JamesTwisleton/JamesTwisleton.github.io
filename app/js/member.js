$(document).ready(function(){

	$('#member_page_controller').hide();
	$('#text_event_name').text("Error: Invalid event name ");
	var eventName = getURLParameter("q");
	if (eventName != null && eventName !== '' ) {
		$('#text_event_name').text("Event name: " + eventName);
		$('#member_page_controller').show();
	}

});

angular.module('teamform-member-app', ['firebase'])
.controller('MemberCtrl', ['$scope', '$firebaseObject', '$firebaseArray', function($scope, $firebaseObject, $firebaseArray) {
	
	// TODO: implementation of MemberCtrl
	
	
	// Call Firebase initialization code defined in site.js
	initalizeFirebase();
	
	$scope.userID = "";
	$scope.userName = "";
    $scope.word1 = false;
    $scope.word2 = false;
    $scope.word3 = false;
    $scope.word4 = false;
    $scope.word5 = false;
    $scope.word6 = false;
    $scope.word7 = false;
    $scope.word8 = false;
    $scope.word9 = false;
    $scope.word10 = false;
    $scope.word11 = false;
    $scope.word12 = false;
    $scope.word13 = false;
    $scope.word14 = false;
    $scope.word15 = false;
    $scope.userGender = "";
    $scope.userfos = "";
	$scope.teams = {};
	
	
	
	$scope.loadFunc = function() {
		var userID = $scope.userID;
        var word1 = $.trim( $scope.word1 );
        var word2 = $.trim( $scope.word2 );
        var word3 = $.trim( $scope.word3 );
        var word4 = $.trim( $scope.word4 );
        var word5 = $.trim( $scope.word5 );
        var word6 = $.trim( $scope.word6 );
        var word7 = $.trim( $scope.word7 );
        var word8 = $.trim( $scope.word8 );
        var word9 = $.trim( $scope.word9 );
        var word10 = $.trim( $scope.word10 );
        var word11 = $.trim( $scope.word11 );
        var word12 = $.trim( $scope.word12 );
        var word13 = $.trim( $scope.word13 );
        var word14 = $.trim( $scope.word14 );
        var word15 = $.trim( $scope.word15 );
        var userGender = $.trim( $scope.userGender );
        var userfos = $.trim( $scope.userfos );
        
		if ( userID !== '' ) {
			
			var refPath = getURLParameter("q") + "/member/" + userID;
			retrieveOnceFirebase(firebase, refPath, function(data) {
								
				if ( data.child("name").val() != null ) {
					$scope.userName = data.child("name").val();
				} else {
					$scope.userName = "";
				}
				
				
				if (data.child("selection").val() != null ) {
					$scope.selection = data.child("selection").val();
				}
				else {
					$scope.selection = [];
				}
                
                
                	if ( data.child("Banter").val() != null ) {
					$scope.word1 = data.child("Banter").val();
				} else {
					$scope.word1 = [];
				}
                
                
                
                
                
                
                
                
                
                
                
                
                
                
				$scope.$apply();
			});
		}
	}
	
	$scope.saveFunc = function() {
		
		
		var userID = $.trim( $scope.userID );
		var userName = $.trim( $scope.userName );
        var word1 = $.trim( $scope.word1 );
        var word2 = $.trim( $scope.word2 );
        var word3 = $.trim( $scope.word3 );
        var word4 = $.trim( $scope.word4 );
        var word5 = $.trim( $scope.word5 );
        var word6 = $.trim( $scope.word6 );
        var word7 = $.trim( $scope.word7 );
        var word8 = $.trim( $scope.word8 );
        var word9 = $.trim( $scope.word9 );
        var word10 = $.trim( $scope.word10 );
        var word11 = $.trim( $scope.word11 );
        var word12 = $.trim( $scope.word12 );
        var word13 = $.trim( $scope.word13 );
        var word14 = $.trim( $scope.word14 );
        var word15 = $.trim( $scope.word15 );
        var userGender = $.trim( $scope.userGender );
        var userfos = $.trim( $scope.userfos );
		
		if ( userID !== '' && userName !== '' ) {
									
			var newData = {				
				'name': userName,
                'Banter': word1,
                'Blunt': word2,
                'Cats': word3,
                'Chill': word4,
                'Colours': word5,
                'Creative': word6,
                'Design': word7,
                'Dogs': word8,
                'Flamboyant': word9,
                'Foodie': word10,
                'Fun': word11,
                'Gender balance': word12,
                'Proactive': word13,
                'Punctuality': word14,
                'Rules': word15,
                'gender': userGender,
                'Field of studies': userfos,
				'selection': $scope.selection
			};
			
			var refPath = getURLParameter("q") + "/member/" + userID;	
			var ref = firebase.database().ref(refPath);
			
			ref.set(newData, function(){
				// complete call back
				//alert("data pushed...");
				
				// Finally, go back to the front-end
				window.location.href= "index.html";
			});
			
			
		
					
		}
	}
	
    
	$scope.refreshTeams = function() {
		var refPath = getURLParameter("q") + "/team";	
		var ref = firebase.database().ref(refPath);
		
		// Link and sync a firebase object
		$scope.selection = [];		
		$scope.toggleSelection = function (item) {
			var idx = $scope.selection.indexOf(item);    
			if (idx > -1) {
				$scope.selection.splice(idx, 1);
			}
			else {
				$scope.selection.push(item);
			}
		}
	
	
		$scope.teams = $firebaseArray(ref);
		$scope.teams.$loaded()
			.then( function(data) {
								
							
							
			}) 
			.catch(function(error) {
				// Database connection error handling...
				//console.error("Error:", error);
			});
			
		
	}
	
	
	$scope.refreshTeams(); // call to refresh teams...
    
    
    

		
}]);










