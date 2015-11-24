describe("chemScheme tests", function () {	
	beforeEach(module("mmAngularChemistry"));
	
	var element, $scope, element, $compile;
	
	beforeEach(inject(function (_$compile_, _$controller_, $rootScope) {
		$scope = $rootScope.$new();
		$scope.substrates = ["H2SO4", "NaOH"];
		$scope.products = ["Na2SO4", "H2O"];
		$controller = _$controller_;
		$compile = _$compile_;		
	}));
	
	it("should render the html correctly", function () {
		element = angular.element(
			"<chem-scheme chem-arrow='rarr' chem-subst='substrates' chem-prod='products'></chem-scheme>"
		);		
		$compile(element)($scope);
		$scope.$digest();
		expect(element.html()).toEqual(
			"<!-- ngRepeat: subst in chemSubst -->" +
				"<span ng-repeat=\"subst in chemSubst\" class=\"ng-scope\">" +
					"<chem-entity chem-formula=\"H2SO4\" class=\"ng-isolate-scope\">" +
						"<span ng-bind-html=\"parsedFormula\" class=\"ng-binding\">" +
							"H<sub>2</sub>SO<sub>4</sub>" +
						"</span>" +
					"</chem-entity>" +
					"<!-- ngIf: !$last -->" +
						"<span ng-if=\"!$last\" class=\"ng-scope\"> + </span>" +
					"<!-- end ngIf: !$last -->" +
				"</span>" +
			"<!-- end ngRepeat: subst in chemSubst -->" +
				"<span ng-repeat=\"subst in chemSubst\" class=\"ng-scope\">" +
					"<chem-entity chem-formula=\"NaOH\" class=\"ng-isolate-scope\">" +
						"<span ng-bind-html=\"parsedFormula\" class=\"ng-binding\">" +
							"NaOH" +
						"</span>" +
					"</chem-entity>" +
					"<!-- ngIf: !$last -->" +
				"</span>" +
			"<!-- end ngRepeat: subst in chemSubst -->" +
			"<span ng-bind-html=\"arrow\" class=\"ng-binding\"> → </span>" +
			"<!-- ngRepeat: prod in chemProd -->" +
				"<span ng-repeat=\"prod in chemProd\" class=\"ng-scope\">" +
					"<chem-entity chem-formula=\"Na2SO4\" class=\"ng-isolate-scope\">" +
						"<span ng-bind-html=\"parsedFormula\" class=\"ng-binding\">" +
							"Na<sub>2</sub>SO<sub>4</sub>" +
						"</span>" +
					"</chem-entity>" +
					"<!-- ngIf: !$last -->" +
						"<span ng-if=\"!$last\" class=\"ng-scope\"> + </span>" +
					"<!-- end ngIf: !$last -->" +
				"</span>" +
			"<!-- end ngRepeat: prod in chemProd -->" +
				"<span ng-repeat=\"prod in chemProd\" class=\"ng-scope\">" +
					"<chem-entity chem-formula=\"H2O\" class=\"ng-isolate-scope\">" +
						"<span ng-bind-html=\"parsedFormula\" class=\"ng-binding\">" +
							"H<sub>2</sub>O" +
						"</span>" +
					"</chem-entity>" +
					"<!-- ngIf: !$last -->" +
				"</span>" +
			"<!-- end ngRepeat: prod in chemProd -->"			
		);
	});
});