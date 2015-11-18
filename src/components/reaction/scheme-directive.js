(function () {
	"use strict"
	angular.module("chemistry")
		.directive("chemScheme", chemScheme);
		
	function chemScheme() {
		return {
			restrict: "E",
			transclude: true,
			template: "<div ng-transclude></div>",
			scope: {}
		};
	}
})();