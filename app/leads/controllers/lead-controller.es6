(function () {
  'use strict';

  class LeadCtrl {
    constructor($log, GetData, $filter, $stateParams) {
      let vm = this;

      vm.getLead = function () {
        var promise = GetData.getLead($stateParams.id);
        promise.then(
          function (payload) {
            vm.data = payload.data;
            vm.form = angular.copy(payload.data);
          },
          function (errorPayload) {
            $log.error('Failure loading lead', errorPayload);
          }
        );
      };

      // TO DO: Add edit functionality for Location
      vm.edit = function () {
        vm.editing = true;
        vm.form = angular.copy(vm.data);
      };

      vm.startOpened = false;
      vm.startOpen = function () {
        vm.startOpened = true;
      };
      vm.endOpened = false;
      vm.endOpen = function () {
        vm.endOpened = true;
      };
      vm.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
      };
      vm.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
      vm.format = vm.formats[0];

      vm.editing = false;
      vm.save = function () {
        if (vm.form) {
          GetData.saveLead(vm.form).then(
            function () {
              vm.data = angular.copy(vm.form);
              vm.editing = false;
            }
          );
        }
      };
    }
  }

  /**
   * @ngdoc object
   * @name leads.controller:LeadCtrl
   *
   * @description
   *
   */
  angular
    .module('leads')
    .controller('LeadCtrl', LeadCtrl);
}());
