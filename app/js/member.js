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
//        var word1 = $.trim( $scope.word1 );
//        var word2 = $.trim( $scope.word2 );
//        var word3 = $.trim( $scope.word3 );
//        var word4 = $.trim( $scope.word4 );
//        var word5 = $.trim( $scope.word5 );
//        var word6 = $.trim( $scope.word6 );
//        var word7 = $.trim( $scope.word7 );
//        var word8 = $.trim( $scope.word8 );
//        var word9 = $.trim( $scope.word9 );
//        var word10 = $.trim( $scope.word10 );
//        var word11 = $.trim( $scope.word11 );
//        var word12 = $.trim( $scope.word12 );
//        var word13 = $.trim( $scope.word13 );
//        var word14 = $.trim( $scope.word14 );
//        var word15 = $.trim( $scope.word15 );
//        var userGender = $.trim( $scope.userGender );
//        var userfos = $.trim( $scope.userfos );
        
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
                
                
     				if (data.child("Banter").val() != null ) {
					$scope.word1 = data.child("Banter").val();
				}
				else {
					$scope.word1 = [];
				}
                
            
         				if (data.child("Blunt").val() != null ) {
					$scope.word2 = data.child("Blunt").val();
				}
				else {
					$scope.word2 = [];
                    
				}
                
                
                			if (data.child("Cats").val() != null ) {
					$scope.word3 = data.child("Cats").val();
				}
				else {
					$scope.word3 = [];
				}
                
                
     				if (data.child("Chill").val() != null ) {
					$scope.word4 = data.child("Chill").val();
				}
				else {
					$scope.word4 = [];
				}
                
            
         				if (data.child("Colours").val() != null ) {
					$scope.word5 = data.child("Colours").val();
				}
				else {
					$scope.word5 = [];
                    
				}
            
                
                			if (data.child("Creative").val() != null ) {
					$scope.word6 = data.child("Creative").val();
				}
				else {
					$scope.word6 = [];
				}
                
                
     				if (data.child("Design").val() != null ) {
					$scope.word7 = data.child("Design").val();
				}
				else {
					$scope.word7 = [];
				}
                
            
         				if (data.child("Dogs").val() != null ) {
					$scope.word8 = data.child("Dogs").val();
				}
				else {
					$scope.word8 = [];
                    
				}
                
                        if (data.child("Flamboyant").val() != null ) {
					$scope.word9 = data.child("Flamboyant").val();
				}
				else {
					$scope.word9 = [];
				}
                
                
                        if (data.child("Foodie").val() != null ) {
                    $scope.word10 = data.child("Foodie").val();
                }
                else {
                    $scope.word10 = [];
                }


                        if (data.child("Fun").val() != null ) {
                    $scope.word11 = data.child("Fun").val();
                }
                else {
                    $scope.word11 = [];

                }

                        if (data.child("Gender balance").val() != null ) {
                    $scope.word12 = data.child("Gender balance").val();
                }
                else {
                    $scope.word12 = [];
                }
                
                
                                        if (data.child("Proactive").val() != null ) {
                    $scope.word13 = data.child("Proactive").val();
                }
                else {
                    $scope.word13 = [];
                }


                        if (data.child("Punctuality").val() != null ) {
                    $scope.word14 = data.child("Punctuality").val();
                }
                else {
                    $scope.word14 = [];

                }

                        if (data.child("Rules").val() != null ) {
                    $scope.word15 = data.child("Rules").val();
                }
                else {
                    $scope.word15 = [];
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
                'Banter': $scope.word1,
                'Blunt': $scope.word2,
                'Cats': $scope.word3,
                'Chill': $scope.word4,
                'Colours': $scope.word5,
                'Creative': $scope.word6,
                'Design': $scope.word7,
                'Dogs': $scope.word8,
                'Flamboyant': $scope.word9,
                'Foodie': $scope.word10,
                'Fun': $scope.word11,
                'Gender balance': $scope.word12,
                'Proactive': $scope.word13,
                'Punctuality': $scope.word14,
                'Rules': $scope.word15,
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










