describe("chemScheme tests", function () {	
	beforeEach(module("mmAngularChemistry"));
	
	var scientific;
	
	beforeEach(inject(function (scientificFilter) {
		scientific = scientificFilter;
	}));
	
	it("should transform value to scientific notation", function () {
		var val = 0.0003;
		expect(scientific(val)).toEqual("3 &centerdot; 10<sup>-4</sup>");
		expect(scientific(val, 1)).toEqual("3.0 &centerdot; 10<sup>-4</sup>");
		expect(scientific(val, 3)).toEqual("3.000 &centerdot; 10<sup>-4</sup>");
		val = 0.3;		
		expect(scientific(val, 2)).toEqual("3.00 &centerdot; 10<sup>-1</sup>");
		val = 1.3;
		expect(scientific(val)).toEqual("1.3");
		expect(scientific(val, 2)).toEqual("1.30");
		val = ".3";
		expect(scientific(val, 2)).toEqual("3.00 &centerdot; 10<sup>-1</sup>");
		val = "a.3";
		expect(scientific(val, 2)).toEqual("a.3");
		val = "3aaa";
		expect(scientific(val, 2)).toEqual("3aaa");
		val = "0.";
		expect(scientific(val)).toEqual("0.");
		val = ".00";
		expect(scientific(val)).toEqual(".00");
		val = "00000.0";
		expect(scientific(val)).toEqual("00000.0");
		val = "0.00";
		expect(scientific(val)).toEqual("0.00");
		val = "000000.322";
		expect(scientific(val, 4)).toEqual("3.2200 &centerdot; 10<sup>-1</sup>");
		val = "0010000.322";
		expect(scientific(val)).toEqual("1.0000322 &centerdot; 10<sup>4</sup>");
		val = 0.322;
		expect(scientific(val, 4)).toEqual("3.2200 &centerdot; 10<sup>-1</sup>");
		expect(scientific(val)).toEqual("3.22 &centerdot; 10<sup>-1</sup>");
		expect(scientific(val, 1)).toEqual("3.2 &centerdot; 10<sup>-1</sup>");
		expect(scientific(val, 0)).toEqual("3 &centerdot; 10<sup>-1</sup>");
		val = 30000;
		expect(scientific(val, 0)).toEqual("3 &centerdot; 10<sup>4</sup>");
		expect(scientific(val)).toEqual("3 &centerdot; 10<sup>4</sup>");
		expect(scientific(val, 4)).toEqual("3.0000 &centerdot; 10<sup>4</sup>");
		val = 30;
		expect(scientific(val, 3)).toEqual("3.000 &centerdot; 10<sup>1</sup>");
		expect(scientific(val, 3, "dot")).toEqual("3.000 &centerdot; 10<sup>1</sup>");
		expect(scientific(val, 3, "cross")).toEqual("3.000 &Cross; 10<sup>1</sup>");
		expect(scientific(val, "cross")).toEqual("3 &Cross; 10<sup>1</sup>");
	});
});