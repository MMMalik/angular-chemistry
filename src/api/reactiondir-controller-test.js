describe("ReactionDirController tests", function () {
	beforeEach(module("angularChemistrySite"));
	
	beforeEach(inject(function ($controller) {
		ReactionDirController = $controller("ReactionDirController");
	}));
	
	it("should contain info about directives", function () {
		expect(ReactionDirController.directives).toBeDefined();
	});
	
	it("should have skipSanitize function", function () {
		expect(ReactionDirController.skipSanitize).toBeDefined();
	});
	
	it("should use skipSanitize function correctly", function () {
		var input = "<chem-entity></chem-entity>"
		expect(ReactionDirController.skipSanitize(input)).toBeDefined();
	});
});