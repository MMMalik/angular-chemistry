describe("scientificFilter", function () {	
	beforeEach(module("mmAngularChemistry"));
	
	var scientific;
	
	beforeEach(inject(function (scientificFilter) {
		scientific = scientificFilter;
	}));
	
	it("should render number value lesser than one by using scientific notation", function () {
		var val = 0.0003;
		expect(scientific(val)).toEqual("3 &centerdot; 10<sup>-4</sup>");
		expect(scientific(val, 1)).toEqual("3.0 &centerdot; 10<sup>-4</sup>");
		expect(scientific(val, 3)).toEqual("3.000 &centerdot; 10<sup>-4</sup>");
		val = 0.3;		
		expect(scientific(val, 2)).toEqual("3.00 &centerdot; 10<sup>-1</sup>");
		val = 0.322;
		expect(scientific(val, 4)).toEqual("3.2200 &centerdot; 10<sup>-1</sup>");
		expect(scientific(val)).toEqual("3.22 &centerdot; 10<sup>-1</sup>");
		expect(scientific(val, 1)).toEqual("3.2 &centerdot; 10<sup>-1</sup>");
		expect(scientific(val, 0)).toEqual("3 &centerdot; 10<sup>-1</sup>");
	});
	
	it("should render number lesser than 10 but greater than 1 without the exponent part", function () {
		val = 1.322;
		expect(scientific(val, 4)).toEqual("1.3220");
		expect(scientific(val)).toEqual("1.322");
		expect(scientific(val, 1)).toEqual("1.3");
	});
	
	it("should render a number value lesser than one, but represented by a string", function () {
		var val = ".3";
		expect(scientific(val, 2)).toEqual("3.00 &centerdot; 10<sup>-1</sup>");
		val = ".008998";
		expect(scientific(val)).toEqual("8.998 &centerdot; 10<sup>-3</sup>");
	});
	
	it("should render 'zero'-like values without changing them", function () {
		var val = "0.";
		expect(scientific(val)).toEqual("0.");
		val = ".00";
		expect(scientific(val)).toEqual(".00");
		val = "00000.0";
		expect(scientific(val)).toEqual("00000.0");
		val = "0.00";
		expect(scientific(val)).toEqual("0.00");
		val = "-0.00";
		expect(scientific(val)).toEqual("-0.00");
	});
	
	it("should remove the leading zeroes before rendering", function () {
		var val = "000000.322";
		expect(scientific(val, 4)).toEqual("3.2200 &centerdot; 10<sup>-1</sup>");
		val = "0010000.322";
		expect(scientific(val)).toEqual("1.0000322 &centerdot; 10<sup>4</sup>");
	});
	
	it("should reflect the value unchanged if it does not represent a correct number", function () {
		var val = "a.3";
		expect(scientific(val, 2)).toEqual("a.3");
		val = "3aaa";
		expect(scientific(val, 2)).toEqual("3aaa");
		val = "";
		expect(scientific(val, 2)).toEqual("");
	});
	
	it("should render the values greater than 10 correctly", function () {
		var val = 30000;
		expect(scientific(val, 0)).toEqual("3 &centerdot; 10<sup>4</sup>");
		expect(scientific(val)).toEqual("3 &centerdot; 10<sup>4</sup>");
		expect(scientific(val, 4)).toEqual("3.0000 &centerdot; 10<sup>4</sup>");
		val = 876.98;
		expect(scientific(val)).toEqual("8.7698 &centerdot; 10<sup>2</sup>");
		expect(scientific(val, 1)).toEqual("8.8 &centerdot; 10<sup>2</sup>");
		expect(scientific(val, 5)).toEqual("8.76980 &centerdot; 10<sup>2</sup>");
		val = 30;
		expect(scientific(val, 3)).toEqual("3.000 &centerdot; 10<sup>1</sup>");
		expect(scientific(val, 3, "dot")).toEqual("3.000 &centerdot; 10<sup>1</sup>");
		expect(scientific(val, 3, "cross")).toEqual("3.000 &Cross; 10<sup>1</sup>");
		expect(scientific(val, "cross")).toEqual("3 &Cross; 10<sup>1</sup>");
	});
	
	it("should render negative values correctly", function () {
		var val = -0.0003;
		expect(scientific(val)).toEqual("-3 &centerdot; 10<sup>-4</sup>");
		val = -876.98;
		expect(scientific(val)).toEqual("-8.7698 &centerdot; 10<sup>2</sup>");
	});
});