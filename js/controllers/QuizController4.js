app.controller('QuizController4', ['$scope', '$http', function($scope, $http) {
	$scope.sunbreaker = 0;
	$scope.defender = 0;
	$scope.striker = 0;
	$scope.architects = 0;
	$scope.questionID = 0;
	$http.get('js/quiz4_data.json').then(function(quizData){
	$scope.myQuestions = quizData.data;
	$scope.totalQuestions = $scope.myQuestions.length;
	});
	$scope.isNextEnabled = "notEnabled";
	$scope.enable = function(qIndex, aIndex){
		$scope.isNextEnabled = "";
		$scope.className = "answer-" + qIndex + "-" + aIndex;
		$scope.qIndex = qIndex;
		$scope.aIndex = aIndex;
	};
	$scope.disableMe = function() {
		$scope.className = "";
		switch($scope.myQuestions[$scope.qIndex].answers[$scope.aIndex].class) {
  			case "sun":
        		$scope.sunbreaker += $scope.myQuestions[$scope.qIndex].answers[$scope.aIndex].points;
        	break;
    		case "def":
        		$scope.defender += $scope.myQuestions[$scope.qIndex].answers[$scope.aIndex].points;
       	 	break;
       	 	case "str":
        		$scope.striker += $scope.myQuestions[$scope.qIndex].answers[$scope.aIndex].points;
        	break;
    		case "a":
        		$scope.architects += $scope.myQuestions[$scope.qIndex].answers[$scope.aIndex].points;
       	 	break;
		}
		$scope.questionID += 1;
	};
	$scope.submit = function() {
		switch($scope.myQuestions[$scope.qIndex].answers[$scope.aIndex].class) {
  			case "sun":
        		$scope.sunbreaker += $scope.myQuestions[$scope.qIndex].answers[$scope.aIndex].points;
        	break;
    		case "def":
        		$scope.defender += $scope.myQuestions[$scope.qIndex].answers[$scope.aIndex].points;
       	 	break;
       	 	case "str":
        		$scope.striker += $scope.myQuestions[$scope.qIndex].answers[$scope.aIndex].points;
        	break;
    		case "a":
        		$scope.architects += $scope.myQuestions[$scope.qIndex].answers[$scope.aIndex].points;
       	 	break;
		}
		if($scope.sunbreaker > $scope.defender && $scope.sunbreaker > $scope.striker && $scope.sunbreaker > $scope.architects)
			$scope.resultsLink = "#sunbreaker";
		else if($scope.defender > $scope.sunbreaker && $scope.defender > $scope.striker && $scope.defender > $scope.architects)
			$scope.resultsLink = "#defender";
		else if ($scope.striker > $scope.sunbreaker && $scope.striker > $scope.defender && $scope.striker > $scope.architects)
			$scope.resultsLink = "#striker";
		else{
			var rando = (Math.floor(Math.random() * 15) + 1) % 3;
			switch(rando) {
  			case 0:
        		$scope.resultsLink = "#sunbreaker";
        	break;
    		case 1:
        		$scope.resultsLink = "#defender";
       	 	break;
       	 	case 2:
        		$scope.resultsLink = "#striker";
        	break;
		}
		}
	};
		
}]);