var myApp = angular.module('myApp', [
	'ui.router'
	]);

myApp.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/list");
  //
  // Now set up the states
  $stateProvider
    .state('list', {
      url: "/list",
      templateUrl: "views/partials/list.html",
      controller: 'ListController'
    })
    .state('device', {
      url: "/device/:itemId",
      templateUrl: "views/partials/device.html",
      controller: 'SingleDeviceController'
    })
    .state('new', {
      url: "/new",
      templateUrl: "views/partials/new.html",
      controller: 'NewController'
    })
    .state('edit', {
      url: "/edit/:itemId",
      templateUrl: "views/partials/edit.html",
      controller: 'EditController'
      })
    .state('delete', {
      url: "/delete/:itemId",
      templateUrl: "views/partials/delete.html",
      controller: 'DeleteController'
      })
    });


myApp.factory('header', function(){
    return {
        create: function(text){
            return "Adding New Device";
        },
        edit: function(text){
            return "Editing device " + text;
        },  
        delete: function(text){
            return "Deleting device " + text;
        },  
        view: function(text){
            return "Viewing device "  + text;
        },
        viewall: function(text){
            return "List devices";
        }  
    }               
});


