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


		if (data.child("gender").val() != null ) {
			$scope.userGender = data.child("gender").val();
		}
		else {
			$scope.userGender = "";
		}
        
        		if (data.child("Field of studies").val() != null ) {
			$scope.userfos = data.child("Field of studies").val();
		}
		else {
			$scope.userfos = "";
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







$scope.matchFunc = function() {
	
	$scope.teamScores = {};



	//Get the firebase path for the teams for the event given by the URL
	var refPath = getURLParameter("q") + "/team";	
	var ref = firebase.database().ref(refPath);		
	$scope.resultString = "";

	//Make an array of teams from the firebase
	$scope.ArrayOfTeams = $firebaseArray(ref);		
	$scope.ArrayOfTeams.$loaded()			
	.then(function(){
		
		//for each team within array of teams
		angular.forEach($scope.ArrayOfTeams, function(ArrayOfTeamsItem) {		

			//Declare array for team member ids
			var teamMemberIDs = [];

			//count number of members		
			if (typeof ArrayOfTeamsItem.teamMembers != 'undefined'){	

					//count the number of members within the team
					console.log(ArrayOfTeamsItem.teamMembers.length); 
					$scope.membernumber=ArrayOfTeamsItem.teamMembers.length;			

					//Iterate over the team members, saving the IDs to teamMemberIDs
					angular.forEach(ArrayOfTeamsItem.teamMembers,function(TeamMember)
					{
						teamMemberIDs.push(TeamMember);						

					})

					console.log(teamMemberIDs);
					$scope.currentTeamName=ArrayOfTeamsItem.$id;

					//saving value obtained from console.log to membernumber
					//console.log($scope.membernumber);	
					$scope.matchScore =0;


					//Get the firebase path for the members for the event given by the URL
					var refPath = getURLParameter("q") + "/member";	
					var ref = firebase.database().ref(refPath);		

					//Make an array of members from the firebase
					$scope.ArrayOfMembers = $firebaseArray(ref);		
					
					$scope.ArrayOfMembers.$loaded()			
					.then(function(){
						angular.forEach($scope.ArrayOfMembers, function(Member) {																						
							//console.log(Member.$id);


							if(teamMemberIDs.indexOf(Member.$id)!=-1){
								console.log("Matching with" + Member.$id);

								if($scope.word1==Member.Banter){
									$scope.matchScore=$scope.matchScore+1;
									console.log($scope.matchScore);
									console.log("Matching with" + Member.$id);
								}

								if($scope.word2==Member.Blunt){
									$scope.matchScore=$scope.matchScore+1;
									console.log($scope.matchScore);
									console.log("Matching with" + Member.$id);
								}

								if($scope.word3==Member.Cats){
									$scope.matchScore=$scope.matchScore+1;
									console.log($scope.matchScore);
									console.log("Matching with" + Member.$id);
								}

								if($scope.word4==Member.Chill){
									$scope.matchScore=$scope.matchScore+1;
									console.log($scope.matchScore);
									console.log("Matching with" + Member.$id);
								}

								if($scope.word5==Member.Colours){
									$scope.matchScore=$scope.matchScore+1;
									console.log($scope.matchScore);
									console.log("Matching with" + Member.$id);
								}
								if($scope.word6==Member.Creative){
									$scope.matchScore=$scope.matchScore+1;
									console.log($scope.matchScore);
									console.log("Matching with" + Member.$id);
								}
								if($scope.word7==Member.Design){
									$scope.matchScore=$scope.matchScore+1;
									console.log($scope.matchScore);
									console.log("Matching with" + Member.$id);
								}
								if($scope.word8==Member.Dogs){
									$scope.matchScore=$scope.matchScore+1;
									console.log($scope.matchScore);
									console.log("Matching with" + Member.$id);
								}

								if($scope.userfos!=Member.FieldOfStudies){
									$scope.matchScore=$scope.matchScore+5;
									console.log($scope.matchScore);
									console.log("Matching with" + Member.$id);
								}

								if($scope.word9==Member.Flamboyant){
									$scope.matchScore=$scope.matchScore+1;
									console.log($scope.matchScore);
									console.log("Matching with" + Member.$id);
								}

								if($scope.word10==Member.Foodie){
									$scope.matchScore=$scope.matchScore+1;
									console.log($scope.matchScore);
									console.log("Matching with" + Member.$id);
								}

								if($scope.word11==Member.Fun){
									$scope.matchScore=$scope.matchScore+1;
									console.log($scope.matchScore);
									console.log("Matching with" + Member.$id);
								}

								if($scope.word12==Member.GenderBalance){
									$scope.matchScore=$scope.matchScore+1;
									console.log($scope.matchScore);
									console.log("Matching with" + Member.$id);
								}

								if($scope.word13==Member.Proactive){
									$scope.matchScore=$scope.matchScore+1;
									console.log($scope.matchScore);
									console.log("Matching with" + Member.$id);
								}

								if($scope.word14==Member.Punctuality){
									$scope.matchScore=$scope.matchScore+1;
									console.log($scope.matchScore);
									console.log("Matching with" + Member.$id);
								}

								if($scope.word15==Member.Rules){
									$scope.matchScore=$scope.matchScore+1;
									console.log($scope.matchScore);
									console.log("Matching with" + Member.$id);
								}

								var nameString = ArrayOfTeamsItem.$id;

								
								//$scope.teamsScores.nameString=$scope.matchScore;

							//console.log(Member.Banter);
						}	

					})
						$scope.resultString+="Score for team " + ArrayOfTeamsItem.$id + " is "+ Math.round(($scope.matchScore/$scope.membernumber)*100)+"\n";
						// $scope.teamScores.ArrayOfTeamsItem.$id = $scope.matchScore;

						$scope.teamScores[ArrayOfTeamsItem.$id] = $scope.matchScore;						


						$scope.matchScore=0;						
						//console.log($scope.teamsScores);
					});
					// console.log($scope.teamScores);

					// for (var i in $scope.teamScores){console.log(i);};
					// // console.log($scope.teamScores);

				}	
			})
});
}








$scope.saveFunc = function() {

	var resultString = $.trim($scope.resultString);
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
				$scope.matchFunc();
				// Finally, go back to the front-end
				// window.location.href= "index.html";
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










