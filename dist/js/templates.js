angular.module('input.date.field').run(['$templateCache', function($templateCache) {$templateCache.put('html/inputDateField.tmpl.html','<p class=input-group><input type=text class=form-control uib-datepicker-popup=dd/MM/yyyy ng-model=model is-open=popup1.opened datepicker-options=dateOptions close-text=Close ng-change=updateModelToMilliSec();> <span class=input-group-btn><button type=button class="btn btn-default" ng-click="popup1.opened = true;"><i class="glyphicon glyphicon-calendar"></i></button></span></p>');}]);