function busCtrl($scope, $http) {
    var scope = $scope;
    var http = $http;
    
    
    $scope.busStop = "Holmviksskogen";
    
    $scope.atHolmviksskogen = function () {
        $scope.busStop = "Holmviksskogen";
        $scope.reload(scope,http);
    }
    
      $scope.atSlussen = function () {
         $scope.busStop = "Slussen";
         $scope.reload(scope,http);
    }
      
    $scope.atHolmviksskogen = function () {
        $scope.busStop = "Holmviksskogen";
        $scope.reload(scope,http);
    }
    
       
    $scope.atHemmesta = function () {
        $scope.busStop = "Hemmesta";
        $scope.reload(scope,http);
    }
   
    
    //This is the spinner
    var opts = {
    	lines: 13, // The number of lines to draw
		 length: 7, // The length of each line
		 width: 4, // The line thickness
		 radius: 10, // The radius of the inner circle
		 corners: 1, // Corner roundness (0..1)
		 rotate: 0, // The rotation offset
		 color: '#000', // #rgb or #rrggbb
		 speed: 1, // Rounds per second
		 trail: 60, // Afterglow percentage
		 shadow: false, // Whether to render a shadow
		 hwaccel: false, // Whether to use hardware acceleration
		 className: 'spinner', // The CSS class to assign to the spinner
		 zIndex: 2e9, // The z-index (defaults to 2000000000)
		 top: 'auto', // Top position relative to parent in px
		 left: 'auto' // Left position relative to parent in px
	};
	var target = document.getElementById('spinner');
	var spinner = new Spinner(opts).spin(target);
	
    
    $http.get('minplatsarray?siteId='+$scope.busStop).success(function(data) {
        $scope.buses = data;
        spinner.stop();
       
    });
    
    $scope.reload = function reload(scope, http) {
    	spinner.spin();
        $http.get('minplatsarray?siteId='+$scope.busStop).success(function(data) {
           $scope.buses = data;
           spinner.stop();
            
	   }); 
    }
}


