(function(angular) {
	'use strict';


angular.module('viz', [])
    .controller('ExampleController', ['$scope', function($scope) {
    	$scope.list = [['a', 'b'], ['c', 'd']];
    }]);




angular.module('xmpl.service', [])

    .value('greeter', {
    	salutation: 'Hello',
    	localize: function(localization) {
      		this.salutation = localization.salutation;
    	},
    	greet: function(name) {
      		return this.salutation + ' ' + name + '!';
    	}
    })

    .value('user', {
    	load: function(name) {
        	this.name = name;
    	}
    });

angular.module('xmpl.directive', []);

angular.module('xmpl.filter', []);

angular.module('xmpl', ['demo', 'xmpl.service', 'xmpl.directive', 'xmpl.filter', 'viz'])

    .run(function(greeter, user) {
    // This is effectively part of the main method initialization code
    	greeter.localize({
        	salutation: 'Bonjour'
    	});
    	user.load('World');
    })

    .controller('XmplController', function($scope, greeter, user){
    	$scope.greeting = greeter.greet(user.name);
        $scope.major = "HELLLLO";
    });

})(window.angular);


angular.module("demo", ['dndLists', 'ngAnimate'])
.controller("SimpleDemoController", function($scope) {

    $scope.models = {
        selected: null,
        lists: {"A": [], "B": []}
    };

    // Generate initial model
    for (var i = 1; i <= 3; ++i) {
        $scope.models.lists.A.push({label: "Item A" + i});
        $scope.models.lists.B.push({label: "Item B" + i});
    }

    // Model to JSON for demo purpose
    $scope.$watch('models', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);

});
