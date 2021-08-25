(function(){
    'use strict';

    angular.module('LunchCheck',[])
    .controller('LunchCheckController',LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope){
        $scope.lunchItems = "";
        $scope.outputMessage = "";

        $scope.checkTooMuch = function () {
            var arrItems = $scope.lunchItems.split(',');

            if ($scope.lunchItems == "") {
                $scope.outputMessage = "Please enter data first";
            } else if (arrItems.length <= 3) {
                $scope.outputMessage = "Enjoy!";
            } else {
                $scope.outputMessage = "Too much!";
            }             
        }
    }

})();