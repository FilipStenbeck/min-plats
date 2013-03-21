function busCtrl($scope, $http) {
    var target, spinner;
   
    //Defining the Spinner object
    $scope.Spinner = function () {
        var opts = {
            lines: 13,
            length: 7,
            width: 4,
            radius: 10,
            corners: 1,
            rotate: 0,
            color: '#000',
            speed: 1,
            trail: 60,
            shadow: false,
            hwaccel: false,
            className: 'spinner',
            zIndex: 2e9,
            top: 'auto',
            left: 'auto'
        };
        //Oops, direct DOM manipulation, how rude!
        target = document.getElementById('spinner');
        
        return new Spinner(opts).spin(target);
    };
   
    //First value for bus stop is of cource my stop
    $scope.busStop = "Holmviksskogen";
    
    //Set bus stop to look for
    $scope.setBusStop = function (stop) {
        $scope.busStop = stop;
        $scope.reload();
    };
    
    //Create a spinner
    $scope.spinner = new $scope.Spinner();
    
    //Load data
    $http.get('minplatsarray?siteId=' + $scope.busStop).success(function (data) {
        $scope.buses = data;
        $scope.spinner.stop();
    });
    
    //Reload data
    $scope.reload = function reload() {
        $scope.spinner = new $scope.Spinner();
        $scope.buses = [];
        $http.get('minplatsarray?siteId=' + $scope.busStop).success(function (data) {
            $scope.buses = data;
            $scope.spinner.stop();
        });
    };
}
