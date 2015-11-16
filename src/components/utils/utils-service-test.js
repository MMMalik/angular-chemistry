describe("ChemUtils", function () {
	beforeEach(module("chemistry"));
	
	var ChemUtils;
	
	beforeEach(inject(function (_ChemUtils_) {
		ChemUtils = _ChemUtils_;
	}));
	
	it("should insert <sub> tags appropriately", function () {
		var formula = "C2H5OH";
		formula = ChemUtils.parseFormula(formula);
		expect(formula).toEqual("C<sub>2</sub>H<sub>5</sub>OH");
		formula = "CH3COOH";
		formula = ChemUtils.parseFormula(formula);
		expect(formula).toEqual("CH<sub>3</sub>COOH");
		formula = "PbCrO4";
		formula = ChemUtils.parseFormula(formula);
		expect(formula).toEqual("PbCrO<sub>4</sub>");
		formula = "C12H22O11";
		formula = ChemUtils.parseFormula(formula);
		expect(formula).toEqual("C<sub>12</sub>H<sub>22</sub>O<sub>11</sub>");
	});
	
	it("should insert <sup> tags appropriately", function () {
		var formula = "SO4_2-";
		formula = ChemUtils.parseFormula(formula);
		expect(formula).toEqual("SO<sub>4</sub><sup>2-</sup>");
		formula = "Cr2O7_2-";
		formula = ChemUtils.parseFormula(formula);
		expect(formula).toEqual("Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup>");
		formula = "BH4_-";
		formula = ChemUtils.parseFormula(formula);
		expect(formula).toEqual("BH<sub>4</sub><sup>-</sup>");
		formula = "[Zn(NH3)4]_2+";
		formula = ChemUtils.parseFormula(formula);
		expect(formula).toEqual("[Zn(NH<sub>3</sub>)<sub>4</sub>]<sup>2+</sup>");
	});
});