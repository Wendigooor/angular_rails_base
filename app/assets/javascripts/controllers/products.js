angular.module('products')

.controller('productsController', [
  '$scope', 'Product', function($scope, Product) {
    $scope.products = Product.query();
    $scope.remove = function(id) {
    	Product.delete({id: id}, function () {
    		$scope.products = $scope.products.filter(function(e) {
			    if (e.id !== id) { return e; }
			  });
    	})
    }
  }
])

.controller('productsNewController', [
  '$scope', 'Product', '$window', function($scope, Product, $window) {
    $scope.product = new Product({});
    $scope.createProduct = function() {
    	$scope.product.$create( function() {
    		$window.location.href = '/';
    	})
    }
  }
])

.controller('productsEditController', [
  '$scope', '$stateParams', '$window', 'Product', function($scope, $stateParams, $window, Product) {
    id = $stateParams.id;
    $scope.product = Product.get({id: id});
    $scope.updateProduct = function() {
    	$scope.product.$update({id: id}, function() {
        $window.location.href = '/';
    	})
    }
  }
])

.controller('productsShowController', [
  '$scope', '$stateParams', 'Product', function($scope, $stateParams, Product) {
  	id = $stateParams.id;
    $scope.product = Product.get({id: id}, function() {
    	$scope.comments = $scope.product.comments;    	
    });
    $scope.addComment = function() {
    	Product.add_comment({id: id}, {comment: $scope.comment.body}, function(saved_comment) {
    		$scope.comments.push({body: saved_comment.body, created_at: saved_comment.created_at});
    		$scope.comment.body = "";
    	})
    }
  }
]);
