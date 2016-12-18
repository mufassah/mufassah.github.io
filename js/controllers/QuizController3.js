app.controller('QuizController3', ['$scope', '$http', function($scope, $http) {
	$scope.gunslinger = 0;
	$scope.nightstalker = 0;
	$scope.bladedancer = 0;
	$scope.architects = 0;
	$scope.questionID = 0;
	$http.get('js/quiz3_data.json').then(function(quizData){
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
  			case "g":
        		$scope.gunslinger += $scope.myQuestions[$scope.qIndex].answers[$scope.aIndex].points;
        	break;
    		case "n":
        		$scope.nightstalker += $scope.myQuestions[$scope.qIndex].answers[$scope.aIndex].points;
       	 	break;
       	 	case "b":
        		$scope.bladedancer += $scope.myQuestions[$scope.qIndex].answers[$scope.aIndex].points;
        	break;
    		case "a":
        		$scope.architects += $scope.myQuestions[$scope.qIndex].answers[$scope.aIndex].points;
       	 	break;
		}
		$scope.questionID += 1;
	};
	$scope.submit = function() {
		switch($scope.myQuestions[$scope.qIndex].answers[$scope.aIndex].class) {
  			case "g":
        		$scope.gunslinger += $scope.myQuestions[$scope.qIndex].answers[$scope.aIndex].points;
        	break;
    		case "n":
        		$scope.nightstalker += $scope.myQuestions[$scope.qIndex].answers[$scope.aIndex].points;
       	 	break;
       	 	case "b":
        		$scope.bladedancer += $scope.myQuestions[$scope.qIndex].answers[$scope.aIndex].points;
        	break;
    		case "a":
        		$scope.architects += $scope.myQuestions[$scope.qIndex].answers[$scope.aIndex].points;
       	 	break;
		}
		if($scope.gunslinger > $scope.nightstalker && $scope.gunslinger > $scope.bladedancer && $scope.gunslinger > $scope.architects)
			$scope.resultsLink = "#gunslinger";
		else if($scope.nightstalker > $scope.gunslinger && $scope.nightstalker > $scope.bladedancer && $scope.nightstalker > $scope.architects)
			$scope.resultsLink = "#nightstalker";
		else if ($scope.bladedancer > $scope.gunslinger && $scope.bladedancer > $scope.nightstalker && $scope.bladedancer > $scope.architects)
			$scope.resultsLink = "#bladedancer";
		else{
			var rando = (Math.floor(Math.random() * 15) + 1) % 3;
			switch(rando) {
  			case 0:
        		$scope.resultsLink = "#gunslinger";
        	break;
    		case 1:
        		$scope.resultsLink = "#nightstalker";
       	 	break;
       	 	case 2:
        		$scope.resultsLink = "#bladedancer";
        	break;
		}
		}
	};
		
}]);