function busCtrl($scope, $http) {
    var spinner;
    
    //Initial value for bus stop is of cource my stop
    $scope.busStop = "Holmviksskogen";
    
    // Create an injector and configure it from 'spinnerModule'
    $injector = angular.injector(['spinnerModule']);
     
    // retrieve an object from the injector by name
    spinner = $injector.get('spinner');
         
    //Load data
    $http.get('minplatsarray?siteId=' + $scope.busStop).success(function (data) {
        $scope.buses = data;
        spinner.opts.fadeOut();
    });
    
    //change bus stops
    $scope.setBusStop = function (stop) {
        $scope.busStop = stop;
        $scope.reload();
    };
    
    //reload data
    $scope.reload = function reload() {
        $scope.buses = [];
        spinner.opts.fadeIn();
        $http.get('minplatsarray?siteId=' + $scope.busStop).success(function (data) {
            spinner.opts.fadeOut();
            $scope.buses = data;
        });
    };
}
