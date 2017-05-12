/* eslint angular/document-service: "off" */

(function () {

  // making the template html relative to this js file
  var scripts = document.getElementsByTagName("script");
  var currentScriptPath = scripts[scripts.length - 1].src;
  var templateURLArray = currentScriptPath.split('/');
  templateURLArray.length = templateURLArray.length - 2;
  templateURLArray.splice(0, 3);
  var templateURL = templateURLArray.join('/') + '/html/inputDateField.tmpl.html';

  angular.module('input.date.field', ['ui.bootstrap', 'ngAnimate'])

    .directive('inputDateField', ["$log", function ($log) {
      return {
        restrict: 'E',
        scope: {
          model: '=ngModel'
        },
        require: "?ngModel",
        templateUrl: templateURL,
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
