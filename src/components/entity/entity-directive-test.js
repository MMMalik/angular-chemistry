describe("chemEntity tests", function () {	
	beforeEach(module("chemistry"));
	
	var element, $scope, $compile;
	
	beforeEach(inject(function (_$compile_, $rootScope) {
		$compile = _$compile_;
		$scope = $rootScope.$new();
		$scope.formula = "C2H5OH";
		element = angular.element(
			"<div chem-entity chem-formula='{{formula}}'></div>"
		);
		$compile(element)($scope);
		$scope.$digest();
	}));
	
	it("should render the html correctly", function () {
		expect(element.html()).toEqual("<span ng-bind-html=\"parsedFormula\" class=\"ng-binding\">C<sub>2</sub>H<sub>5</sub>OH</span>");	
	});
	
	it("should render a new formula correctly if the formula value in the controller has changed", function () {
		$scope.formula = "CH4";
		$scope.$digest();
		expect(element.html()).toEqual("<span ng-bind-html=\"parsedFormula\" class=\"ng-binding\">CH<sub>4</sub></span>");	
	});
	
	it("should render the html correctly if 'chem-as-is' attribute is set to 'true'", function () {
		$scope.formula = "9-BBN";
		element = angular.element(
			"<div chem-entity chem-formula='{{formula}}' chem-as-is='true' ></div>"
		);
		$compile(element)($scope);
		$scope.$digest();
		expect(element.html()).toEqual("<span ng-bind-html=\"parsedFormula\" class=\"ng-binding\">9-BBN</span>");	
	});
	
	it("should render the html correctly if 'chem-sub' attribute is set", function () {
		$scope.formula = "H2SO4";
		element = angular.element(
			"<div chem-entity chem-formula='{{formula}}' chem-sub='bold' ></div>"
		);
		$compile(element)($scope);
		$scope.$digest();
		expect(element.html()).toEqual(
			"<span ng-bind-html=\"parsedFormula\" class=\"ng-binding\">" +
				"H<sub class=\"bold\">2</sub>SO<sub class=\"bold\">4</sub>" +
			"</span>"
		);	
	});
	
	it("should render the html correctly if 'chem-sup' attribute is set", function () {
		$scope.formula = "SO4^(2-)";
		element = angular.element(
			"<div chem-entity chem-formula='{{formula}}' chem-sup='italics' ></div>"
		);
		$compile(element)($scope);
		$scope.$digest();
		expect(element.html()).toEqual(
			"<span ng-bind-html=\"parsedFormula\" class=\"ng-binding\">" +
				"SO<sub>4</sub><sup class=\"italics\">2-</sup>" +
			"</span>"
		);	
	});
	
	it("should render the html correctly if 'chem-sup' and 'chem-sub' attributes are set", function () {
		$scope.formula = "H2PO4^-";
		element = angular.element(
			"<div chem-entity chem-formula='{{formula}}' chem-sup='italics' chem-sub='bold' ></div>"
		);
		$compile(element)($scope);
		$scope.$digest();
		expect(element.html()).toEqual(
			"<span ng-bind-html=\"parsedFormula\" class=\"ng-binding\">" +
				"H<sub class=\"bold\">2</sub>PO<sub class=\"bold\">4</sub><sup class=\"italics\">-</sup>" +
			"</span>"
		);	
	});
	
	it("should render a new formula correctly if the chemAsIs value in the controller has changed from false to true", function () {
		$scope.formula = "CH4";
		$scope.chemAsIs = false;
		element = angular.element(
			"<div chem-entity chem-formula='{{formula}}' chem-as-is='{{chemAsIs}}' ></div>"
		);
		$compile(element)($scope);
		$scope.$digest();
		expect(element.html()).toEqual("<span ng-bind-html=\"parsedFormula\" class=\"ng-binding\">CH<sub>4</sub></span>");
		$scope.chemAsIs = true;
		$scope.$digest();
		expect(element.html()).toEqual("<span ng-bind-html=\"parsedFormula\" class=\"ng-binding\">CH4</span>");	
	});
	
	it("should render a new formula correctly if the chemSup or chemSub values in the controller have changed", function () {
		$scope.formula = "CH5^+";
		$scope.chemSup = "bold";
		$scope.chemSub = "italics";
		element = angular.element(
			"<div chem-entity chem-formula='{{formula}}' chem-sub=\"{{chemSub}}\" chem-sup='{{chemSup}}' ></div>"
		);
		$compile(element)($scope);
		$scope.$digest();
		expect(element.html()).toEqual(
			"<span ng-bind-html=\"parsedFormula\" class=\"ng-binding\">CH<sub class=\"italics\">5</sub><sup class=\"bold\">+</sup></span>"
		);
		$scope.chemSup = "foo";
		$scope.chemSub = "bar";
		$scope.$digest();
		expect(element.html()).toEqual(
			"<span ng-bind-html=\"parsedFormula\" class=\"ng-binding\">CH<sub class=\"bar\">5</sub><sup class=\"foo\">+</sup></span>"
		);	
	});
});
	
describe("chemEntity within chemScheme tests", function () {	
	beforeEach(module("chemistry"));
	
	var element, $scope;
	
	beforeEach(inject(function ($compile, $rootScope) {
		$scope = $rootScope.$new();
		$scope.formula1 = "C2H5OH";
		$scope.formula2 = "CH4";
		element = angular.element(
			"<chem-scheme>" +
				"<chem-entity chem-formula='{{formula1}}'></chem-entity>" +
				"<chem-entity chem-formula='{{formula2}}'></chem-entity>" +
			"</chem-scheme>"
		);
		$compile(element)($scope);
		$scope.$digest();
	}));
	
	it("should be able to work correctly within chemReaction directive", function () {
		expect(element.html()).toEqual(
			"<div ng-transclude=\"\">" +
			"<chem-entity chem-formula=\"C2H5OH\" class=\"ng-scope ng-isolate-scope\">" +
				"<span ng-bind-html=\"parsedFormula\" class=\"ng-binding\">C<sub>2</sub>H<sub>5</sub>OH</span>" +
			"</chem-entity>" +
			"<chem-entity chem-formula=\"CH4\" class=\"ng-scope ng-isolate-scope\">" +
				"<span ng-bind-html=\"parsedFormula\" class=\"ng-binding\">CH<sub>4</sub></span>" +
			"</chem-entity>" +
			"</div>"
		);
	});
	
});