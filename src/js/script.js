// Code goes here

angular.module('myApp', ['input.date.field'])
  .controller('myBasicController', [function() {
      var vm = this;

      vm.dt=1499106600000;

      vm.options = {
        minDate: new Date(),
        maxDate: new Date("2017-07-17")
      };

  }])
