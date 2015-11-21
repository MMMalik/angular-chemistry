(function () {
	"use strict";
	angular.module("angularChemistrySite", ["ngSanitize", "mmAngularChemistry", "ngRoute"])
		.config(["$routeProvider", function ($routeProvider) {
			$routeProvider.when("/", {
				templateUrl: "components/home/home-view.html"
			})
			.when("/introduction", {
				templateUrl: "components/introduction/introduction-view.html"
			})
			.when("/download", {
				templateUrl: "components/download/download-view.html"
			})
			.when("/api/reaction-directives", {
				templateUrl: "components/api/reaction-directives-view.html"
			})
			.when("/help", {
				templateUrl: "components/help/help-view.html"
			})
			.when("/license", {
				templateUrl: "components/license/license-view.html"
			})
			.when("/examples", {
				templateUrl: "components/examples/examples-view.html"
			})
			.otherwise({ redirectTo: "/" })
		}]);
})();