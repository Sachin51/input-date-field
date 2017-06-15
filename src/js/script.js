// Code goes here

angular.module('myApp', ['input.date.field'])
  .controller('myBasicController', [function() {
      var vm = this;

      vm.dt=1270837800000;

      vm.options = {
        minDate: new Date(),
        maxDate: new Date("2017-06-17")
      };

  }])
