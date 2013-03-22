//Spinner module
(function () {
    
    var spinnerModule = angular.module('spinnerModule', [])
    
    spinnerModule.factory('spinner', function() {
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
            left: 'auto',
            fadeOut : function fadeOut() {
                $('#spinner').fadeOut('fast');
            },
             fadeIn : function fadeIn() {
                $('#spinner').fadeIn('fast');
            }
        };
        
        return new Spinner(opts).spin(document.getElementById('spinner'));   
    });
}());