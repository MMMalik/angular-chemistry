describe("chemScheme tests", function () {	
	beforeEach(module("chemistry"));
	
	var element;
	
	beforeEach(inject(function ($compile, $rootScope) {
		$scope = $rootScope.$new();
		element = angular.element(
			"<chem-scheme>" +
			"<div>foobar</div>" +
			"</chem-scheme>"
		);		
		$compile(element)($scope);
		$scope.$digest();
	}));
	
	it("should render the html correctly", function () {
		expect(element.html()).toEqual("<div ng-transclude=\"\"><div class=\"ng-scope\">foobar</div></div>");	
	});
});