describe("IntroductionController tests", function () {
	beforeEach(module("angularChemistrySite"));
	
	beforeEach(inject(function ($controller) {
		IntroductionController = $controller("IntroductionController");
	}));
	
	it("should contain some data to display", function () {
		expect(IntroductionController.toolsDescription).toBeDefined();
	});
});