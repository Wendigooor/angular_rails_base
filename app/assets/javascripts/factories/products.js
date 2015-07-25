angular.module('products')

.factory('Product', [
	'$resource', function($resource) {
		var url;
		url = '/api/products/:id';
		return $resource(url, {}, {
			get: {method:'GET'},
			query: {method:'GET', isArray:true},
			create: {method:'POST'},
			update: {method:'PATCH'},
			remove: {method:'DELETE'},
			add_comment: {method:'POST', url: url + '/add_comment'}
		});
	}
]);
