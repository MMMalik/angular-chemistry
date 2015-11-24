(function () {
	"use strict"
	angular.module("mmAngularChemistry")
		.directive("chemScheme", chemScheme);
	
	chemScheme.$inject = ["$compile"];
	
	function chemScheme($compile) {
		return {
			restrict: "AE",
			template: "<span ng-repeat='subst in chemSubst'>" +
						"<chem-entity chem-formula='{{subst}}'></chem-entity>" +
						"<span ng-if='!$last'> &plus; </span>" +
					  "</span>" +
					  "<span ng-bind-html='arrow'></span>" +
					  "<span ng-repeat='prod in chemProd'>" +
						"<chem-entity chem-formula='{{prod}}'></chem-entity>" +
						"<span ng-if='!$last'> &plus; </span>" +
					  "</span>",
			scope: {
				chemArrow: "@",
				chemProd: "=",
				chemSubst: "="
			},
			link: function (scope, element) {
				scope.arrow = " &" + scope.chemArrow + "; ";
			}
		};
	}
})();