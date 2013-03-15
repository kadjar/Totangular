'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('totangular.services', []).
  value('version', '0.1').
  factory('toto', function ($rootScope) {
    var toto = new Toto('/service');
    return {
      request: function (eventName, args) {
        return toto.request(eventName, args);
      },
      sessionID: function () {
        return toto.sessionID();
      },
      logout: function() {
        return toto.logout();
      }
      
      // Example of a service with a callback
      //
      // on: function (eventName, callback) {
      //   socket.on(eventName, function () {  
      //     var args = arguments;
      //     $rootScope.$apply(function () {
      //       callback.apply(socket, args);
      //     });
      //   });
      // },

    };
  });
