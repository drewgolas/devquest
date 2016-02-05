(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name devQuest.factory:GetData
   *
   * @description
   *
   */
  angular
    .module('devQuest')
    .factory('GetData', GetData);

  function GetData($http) {
    let GetDataBase = {},
        base = 'http://localhost:3002';
    GetDataBase.getLocations = () => {
      return $http.get(base + '/locations/');
    };
    GetDataBase.saveLocation = (locationData) => {
      return $http.patch(base + '/locations/' + locationData.id, locationData)
        .success(function (data, status) {
          console.info(data, status);
        });
    };
    GetDataBase.getLocation = (id) => {
      return $http.get(base + '/locations/' + id);
    };
    GetDataBase.getLocationNested = (id, entity) => {
      return $http.get(base + '/locations/' + id + '/' + entity + '?_sort=start&_order=ASC');
    };
    GetDataBase.getBookings = () => {
      return $http.get(base + '/bookings/?_sort=start&_order=ASC');
    };
    GetDataBase.saveBooking = (bookingData) => {
      return $http.patch(base + '/bookings/' + bookingData.id, bookingData)
        .success(function (data, status) {
          console.info(data, status);
        });
    };
    GetDataBase.getBooking = (id) => {
      return $http.get(base + '/bookings/' + id + '?_expand=location');
    };
    GetDataBase.getLeads = () => {
      return $http.get(base + '/leads/?_sort=start&_order=ASC');
    };
    GetDataBase.saveLead = (leadData) => {
      return $http.patch(base + '/leads/' + leadData.id, leadData)
        .success(function (data, status) {
          console.info(data, status);
        });
    };
    GetDataBase.getLead = (id) => {
      return $http.get(base + '/leads/' + id + '?_expand=location');
    };
    return GetDataBase;
  }
}());
