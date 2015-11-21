(function () {
	"use strict"
	angular.module("mmAngularChemistry")
		.directive("chemScheme", chemScheme);
	
	chemScheme.$inject = ["$compile"];
	
	function chemScheme($compile) {
		return {
			restrict: "AE",
			transclude: true,
			template: "<div ng-transclude></div>",
			scope: {
				chemArrow: "@"
			},
			link: function (scope, element) {
				function appendPluses(els) {
					angular.forEach(els, function (el, index) {
						element.append(el);						
						if (index < els.length - 1) { element.append("<span> &plus; </span>"); }
					});
				}
				
				var arrow = "&" + scope.chemArrow + ";",
					substrates = element.find("chem-subst"),
					products = element.find("chem-prod");
					
				element.empty();				
				
				appendPluses(substrates);
				element.append("<span> " + arrow + " </span>");
				appendPluses(products);				
			}
		};
	}
})();