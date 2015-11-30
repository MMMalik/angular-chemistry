describe("scientificFilter", function () {	
	beforeEach(module("mmAngularChemistry"));
	
	var temp;
	
	beforeEach(inject(function (tempFilter) {
		temp = tempFilter;
	}));
	
	it("should render the temperature given in Kelvins", function () {
		var val = 3;
		expect(temp(val)).toEqual("3.0 K");
		expect(temp(val, "K")).toEqual("3.0 K");
		expect(temp(val, 2)).toEqual("3.00 K");
		val = "31234";
		expect(temp(val)).toEqual("31234.0 K");
		expect(temp(val, 0)).toEqual("31234 K");
		expect(temp(val, "K")).toEqual("31234.0 K");
	});
	
	it("should render the temperature given in Celsius", function () {
		var val = 3;
		expect(temp(val, "C")).toEqual("3.0 &deg;C");
		expect(temp(val, "C", 2)).toEqual("3.00 &deg;C");
	});
	
	it("should render the temperature given in Fahrenheit", function () {
		var val = 3;
		expect(temp(val, "F")).toEqual("3.0 &deg;F");
	});
	
	it("should render values correctly if the leading zero is omitted", function () {
		var val = ".89";
		expect(temp(val, 2)).toEqual("0.89 K");
	});
	
	it("should handle non-numeric values", function () {
		var val = "";
		expect(temp(val, "K-to-C", 1)).toEqual("");
		val = "aa";
		expect(temp(val, "K-to-C", 1)).toEqual("aa");
		val = "a1234a";
		expect(temp(val, "K-to-C", 1)).toEqual("a1234a");
		val = "1234aa";
		expect(temp(val, "K-to-C", 1)).toEqual("1234aa");
	});
	
	it("should transform to Celcius the temperature given in Kelvins", function () {
		var val = 3;
		expect(temp(val, "K-to-C")).toEqual("-270.1 &deg;C");
		expect(temp(val, "K-to-C", 3)).toEqual("-270.150 &deg;C");
		expect(temp(val, "K-to-C", 1)).toEqual("-270.1 &deg;C");
		expect(temp(val, "K-to-C", 0)).toEqual("-270 &deg;C");
		val = 5.24;
		expect(temp(val, "K-to-C", 2)).toEqual("-267.91 &deg;C");
		expect(temp(val, "K-to-C", 1)).toEqual("-267.9 &deg;C");
		expect(temp(val, "K-to-C", 0)).toEqual("-268 &deg;C");
		val = 273.30;
		expect(temp(val, "K-to-C", 1)).toEqual("0.2 &deg;C");
		val = "273.30";
		expect(temp(val, "K-to-C", 1)).toEqual("0.2 &deg;C");
	});
	
	it("should transform to Celsius the temperature given in Fahrenheit", function () {
		var val = 3;
		expect(temp(val, "F-to-C", 2)).toEqual("-16.11 &deg;C");
		val = -90;
		expect(temp(val, "F-to-C", 0)).toEqual("-68 &deg;C");
	});
	
	it("should transform to Kelvins the temperature given in Fahrenheit", function () {
		var val = 3;
		expect(temp(val, "F-to-K", 2)).toEqual("257.04 K");
		val = -90;
		expect(temp(val, "F-to-K", 0)).toEqual("205 K");
	});
	
	it("should transform to Kelvins the temperature given in Celsius", function () {
		var val = 3;
		expect(temp(val, "C-to-K", 4)).toEqual("276.1500 K");
	});
	
	it("should transform to Fahrenheit the temperature given in Celsius", function () {
		var val = 12;
		expect(temp(val, "C-to-F", 1)).toEqual("53.6 &deg;F");
		val = -19.89;
		expect(temp(val, "C-to-F", 2)).toEqual("-3.80 &deg;F");
	});
	
	it("should transform to Fahrenheit the temperature given in Kelvins", function () {
		var val = 12;
		expect(temp(val, "K-to-F", 2)).toEqual("-438.07 &deg;F");
		val = -19.89;
		expect(temp(val, "K-to-F", 4)).toEqual("-495.4720 &deg;F");
	});
});