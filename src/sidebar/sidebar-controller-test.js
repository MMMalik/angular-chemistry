describe("SidebarController tests", function () {
	beforeEach(module("angularChemistrySite"));
	
	beforeEach(inject(function ($controller) {
		SidebarController = $controller("SidebarController");
	}));
	
	it("should contain tabs array", function () {
		expect(SidebarController.linksInner).toEqual(
			["", "Home", "Download", "Introduction", "Api", "Examples", "Help", "License"]
		);
		expect(SidebarController.linksOuter).toEqual(
			{ "Github": "https://github.com/MMMalik/angular-chemistry" }											 
		);
	});
});