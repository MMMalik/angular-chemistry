(function () {
	"use strict"
	angular.module("chemistry")
		.directive("chemEntity", chemEntity);
		
	chemEntity.$inject = ["ChemUtils"];
		
	function chemEntity(ChemUtils) {
		return {
			restrict: "AE",
			template: "<span ng-bind-html='parsedFormula'></span>",
			scope: {
				chemFormula: "@",
				chemAsIs: "@",
				chemSub: "@",
				chemSup: "@"
			},
			link: function ($scope, $element, $attrs) {
				function update() {
					if ($scope.chemAsIs === "true") {
						$scope.parsedFormula = $scope.chemFormula;						
					} else {
						$scope.parsedFormula = ChemUtils.parseFormula($scope.chemFormula, { sub: $scope.chemSub, sup: $scope.chemSup } );
					}
				}
				$scope.$watchGroup(["chemFormula", "chemAsIs", "chemSub", "chemSup"], update);				
			}
		};
	}
})();