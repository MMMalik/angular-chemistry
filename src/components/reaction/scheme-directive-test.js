describe("chemScheme tests", function () {	
	beforeEach(module("mmAngularChemistry"));
	
	var element;
	
	beforeEach(inject(function ($compile, $rootScope) {
		$scope = $rootScope.$new();
		element = angular.element(
			"<chem-scheme chem-arrow='rarr'>" +
				"<chem-subst chem-formula='H2SO4'></chem-subst>" +
				"<chem-subst chem-formula='NaOH'></chem-subst>" +
				"<chem-prod chem-formula='Na2SO4'></chem-prod>" +
				"<chem-prod chem-formula='H2O'></chem-prod>" +
			"</chem-scheme>"
		);		
		$compile(element)($scope);
		$scope.$digest();
	}));
	
	it("should render the html correctly", function () {
		expect(element.html()).toEqual(			
			"<chem-subst chem-formula=\"H2SO4\" class=\"ng-scope ng-isolate-scope\">" +
				"<span ng-bind-html=\"parsedFormula\" class=\"ng-binding\">H<sub>2</sub>SO<sub>4</sub></span>" +
			"</chem-subst>" +
			"<span> + </span>" +
			"<chem-subst chem-formula=\"NaOH\" class=\"ng-scope ng-isolate-scope\">" +
				"<span ng-bind-html=\"parsedFormula\" class=\"ng-binding\">NaOH</span>" +
			"</chem-subst>" +
			"<span> → </span>" +
			"<chem-prod chem-formula=\"Na2SO4\" class=\"ng-scope ng-isolate-scope\">" +
				"<span ng-bind-html=\"parsedFormula\" class=\"ng-binding\">Na<sub>2</sub>SO<sub>4</sub></span>" +
			"</chem-prod>" +
			"<span> + </span>" +
			"<chem-prod chem-formula=\"H2O\" class=\"ng-scope ng-isolate-scope\">" +
				"<span ng-bind-html=\"parsedFormula\" class=\"ng-binding\">H<sub>2</sub>O</span>" +
			"</chem-prod>"
		);
	});
});