routerApp.controller('NewsController', ['$scope', '$http', function($scope, $http) {
    
    $http.get('js/shared/news-home-data.json').then(function(newsData){
	    console.log(newsData.data);   
        $scope.slideItems = newsData.data;
	});
    
    $scope.selector = 0;
    
    $scope.switchImage = function (updown){
        if($scope.selector + updown > 3)
            $scope.selector = 0;
        else if($scope.selector + updown < 0)
            $scope.selector = $scope.slideItems.length - 1;
        else
            $scope.selector = $scope.selector + updown;
        console.log($scope.selector);
    }
    
}]);