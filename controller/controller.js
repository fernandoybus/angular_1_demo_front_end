
// LIST///////////////////////////////////////////////
angular
  .module('myApp')
  .controller('ListController', ['$scope', '$http', '$routeParams', 'header', function ($scope, $http, $routeParams, header) {

	$http.get('model/data1.json').success(function(data){
	
		$scope.devices = data;
		$scope.whichItem = $routeParams.itemId;

		$scope.header_factory = header.viewall(Number($routeParams.itemId) +1);

		if ($routeParams.itemId == 0){
			$scope.prevItem = $scope.devices.length -1;
			
		}
		else{
			$scope.prevItem = Number($routeParams.itemId) -1;
		}
		if ($routeParams.itemId == $scope.devices.length-1){
			
			$scope.nextItem =0;
		}
		else{
			$scope.nextItem = Number($routeParams.itemId)+1;	
		}
	});

  }]);


// VIEW 1///////////////////////////////////////////////
angular
  .module('myApp')
  .controller('SingleDeviceController', ['$scope', '$http', '$routeParams', 'header', '$stateParams' , function ($scope, $http, $routeParams, header, $stateParams) {

	$http.get('model/data1.json').success(function(data){
	
		$scope.devices = data;

		//$scope.whichItem = $routeParams.itemId;
		$scope.whichItem = $stateParams.itemId;
		//console.log($stateParams.itemId);

		$scope.header_factory = header.view(Number($stateParams.itemId) +1);

		if ($stateParams.itemId == 0){
			$scope.prevItem = $scope.devices.length -1;
			
		}
		else{
			$scope.prevItem = Number($stateParams.itemId) -1;
		}
		if ($stateParams.itemId == $scope.devices.length-1){
			
			$scope.nextItem =0;
		}
		else{
			$scope.nextItem = Number($stateParams.itemId)+1;	
		}
	});

  }]);

// NEW///////////////////////////////////////////////
  angular
  .module('myApp')
  .controller('NewController', ['$scope', '$http', '$routeParams', 'header', '$stateParams', function ($scope, $http, $routeParams, header, $stateParams) {

	$scope.header_factory = header.create("");

    $scope.savenew = function() {


         var dataObject = {
          device :  $scope.device, 
          user :  $scope.username, 
          order : $scope.color,
       };

       
       	//BACK END CALL
        $http.post('savenew.php', JSON.stringify(dataObject)).success(function(html){
        /*success callback, should return some confirmation*/
        
		$scope.devices = data;
		$scope.whichItem = $routeParams.itemId;

		window.location = '#/';

        });
    };

  }]);


// EDIT///////////////////////////////////////////////
 angular
  .module('myApp')
  .controller('EditController', ['$scope', '$http', '$routeParams', 'header', '$stateParams', function ($scope, $http, $routeParams, header, $stateParams) {

	$http.get('model/data1.json').success(function(data){
	
		$scope.devices = data;
		//$scope.whichItem = $routeParams.itemId;
		$scope.whichItem = $stateParams.itemId;

		$scope.header_factory = header.edit(Number($stateParams.itemId) +1);

	});

    $scope.savechanges = function() {

		var item = $scope.whichItem;
    	//console.log($scope.devices[item].user_name);

         var dataObject = {
          id :  $scope.whichItem, 
          user :  $scope.devices[item].user_name, 
          order : $scope.devices[item].color,
       };
     
       
       	//BACK END CALL
        $http.post('model/savechanges.php', JSON.stringify(dataObject)).success(function(data){
        /*success callback, should return some confirmation*/
        
		$scope.response = data;

		window.location = '#/';

        });
    };


  }]);


// DELETE///////////////////////////////////////////////
 angular
  .module('myApp')
  .controller('DeleteController', ['$scope', '$http', '$routeParams', 'header', '$stateParams', function ($scope, $http, $routeParams, header, $stateParams) {

	$http.get('model/data1.json').success(function(data){
	
		$scope.devices = data;
		//$scope.whichItem = $routeParams.itemId;
		$scope.whichItem = $stateParams.itemId;

		$scope.header_factory = header.delete(Number($stateParams.itemId) +1);
	});

    $scope.deletedevice = function() {

		var item = $scope.whichItem;

    	//console.log($scope.devices[item].user_name);

         var dataObject = {
          id :  $scope.whichItem
       };
     
       
       	//BACK END CALL
        $http.post('model/deletedevice.php', JSON.stringify(dataObject)).success(function(data){
        /*success callback, should return some confirmation*/
        

		$scope.response = data;

		window.location = '#/';
	

        });
    };



  }]);
