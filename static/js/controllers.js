'use strict';

/* Controllers */

function AppCtrl($scope, toto) {
}

function MyCtrl1($scope, toto) {
  $('#login').on('click', function () { 
    toto.request('account.login', {'user_id': $('#email').val(), 'password': $('#pass').val()}).then(function(){
      updateUI();
    }).error(function(e){
      $('.alert').removeClass('hidden').text(e.value);
    })
  });

  $('#signup').click(function(){
    toto.request('account.create', {'user_id': $('#email').val(), 'password': $('#pass').val()}).then(function(){
      updateUI();
    }).error(function(e){
      $('.alert').removeClass('hidden').text(e.value);
    })
  });

  $('#count').click(updateCount);
  $('#logout').click(function(){
    toto.logout();
    updateUI();
  });
  updateUI();
}
MyCtrl1.$inject = ['$scope', 'toto'];


function MyCtrl2() {
}
MyCtrl2.$inject = [];

  
function updateCount() {
  toto.request("count", {}).then(function(response){
    $('#output').append($('<p>').text(response.count));
  });
}

function updateUI() {
  if (toto.sessionID()) {
    $('#unauth').addClass('hidden');
    $('#logged-in').removeClass('hidden');
    updateCount();
  } else {
    $('#unauth').removeClass('hidden');
    $('#logged-in').addClass('hidden');
  }
}