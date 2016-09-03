angular.module('calendarDemoApp', [])

.directive('myCalendar', function () {
    return {
        restrict: 'E',
        templateUrl: 'myCalendar.html',
        scope: true,
        controller: function ($scope, $element, $attrs) {

            //set intial state
            var date = new Date();
            var currentMonth = date.getMonth();
            var currentYear = date.getFullYear();

            // set month, year in drop down
            $scope.selectedMonth = currentMonth;
            $scope.selectedYear = currentYear;

            // on drop down change, recreate calendar
            $scope.refreshCalendar = function () {
                currentMonth = $scope.selectedMonth;
                $scope.loadCalendar($scope.selectedYear, $scope.selectedMonth);
            };

            // load the calendar
            $scope.loadCalendar = function (year, month) {
                $scope.range = CalendarRange.getMonthlyRange(new Date(year, month));
                $scope.range.days.forEach(addClass);
            };

            // display calendar
            $scope.loadCalendar(currentYear, currentMonth);

            // set appropriate class for previous and next months
            function addClass(element, index, array) {
                if (element.month < currentMonth || element.month > currentMonth) {
                    element.monthClass = 'previous-or-next-month';
                }
            }
        }
    };
});
