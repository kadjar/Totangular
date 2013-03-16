'use strict';

/* Controllers */

function AppCtrl($scope, toto) {
}

function MyCtrl1($scope, toto) {
  $scope.errorHidden = true;

  function updateCount() {
    toto.request("count", {}).then(function(response){
      $('#output').append($('<p>').text(response.count));
    });
  }

  function updateUI() {
    if (toto.sessionID()) {
      $scope.userSignedIn = true;
      updateCount();
    } else {
      $scope.userSignedIn = false;
    }
  }

  $scope.login = function () { 
    toto.request('account.login', {'user_id': $scope.email, 'password': $scope.password}).then(function(){
      updateUI();
      $scope.errorHidden = true;
    }).error(function(e){
      $scope.errorHidden = false;
      $scope.errorText = e.value;
    })
  };

  $scope.signup = function(){
    toto.request('account.create', {'user_id': $scope.email, 'password': $scope.password}).then(function(){
      updateUI();
      $scope.errorHidden = true;
    }).error(function(e){
      $scope.errorHidden = false;
      $scope.errorText = e.value;
    })
  };

  $scope.count = function() { updateCount() };
  $scope.logout = function(){
    toto.logout();
    updateUI();
  };

  updateUI();
}
MyCtrl1.$inject = ['$scope', 'toto'];


function MyCtrl2() {
}
MyCtrl2.$inject = [];

  
