(function () {

  angular.module('input.date.field', ['ui.bootstrap', 'ngAnimate'])

    .directive('inputDateField', ["$log", function ($log) {
      return {
        restrict: 'E',
        scope: {
          model: '=ngModel',
          disabled: '=ngDisabled',
          dateOptions: '=?datepickerOptions'
        },
        require: "?ngModel",
        templateUrl: 'html/inputDateField.tmpl.html',
        link: function (scope) {
          $log.info("model inside lnk - " + scope.model);

          //      scope.validate = function() {
          //        if(angular.isUndefined(scope.model))
          //          bootbox.alert("Date should be in DD/MM/YYYY format");
          //      }

          scope.updateModelToMilliSec = function () {
            scope.model = scope.model.getTime();
          }

        }
      };
}]);

})();
