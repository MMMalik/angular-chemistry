var fs = require("fs");

var data = fs.readFileSync("elements-wiki-raw.txt", "utf8"),
	elements = {},
	data = data.split("\n");

function parseElement(element) {
	var splitted = element.split("||");
	
	function getSymbol() {
		var symbol = splitted[1].substr(splitted[1].length - 4, 3);
		if (symbol.charAt(0) === "|") {
			symbol = symbol.substr(2);
		}
		return symbol.trim();
	}
	
	function getDesc() {
		return splitted[1].split("|")[1].split("}}")[0].trim();
	}
	
	function getName() {
		return splitted[2].replace(/\[|\]/g, "").split("(")[0].trim();
	}
	
	function getDensity() {
		var density = splitted[7].trim();
		if (density === "–") {
			density = "unknown";
		}
		if (density.match(/sort/)) {
			density = density.split("|")[1];
		}
		return density.trim();
	}
	
	function getMeltingPoint() {
		var mp = splitted[8].trim();
		if (mp === "–") {
			mp = "unknown";
		}
		if (mp.match(/sort/)) {
			mp = mp.split("|")[1];
		}
		if (mp.match(/ref/)) {
			if (mp.indexOf("<") >= 0) {
				mp = mp.split("<")[0];
			} else if (mp.indexOf("{")) {
				mp = mp.split("{")[0];
			}
		}
		return mp.trim();
	}
	
	function getBoilingPoint() {
		var bp = splitted[9].trim();
		if (bp === "–") {
			bp = "unknown";
		}
		if (bp.match(/sort/)) {
			bp = bp.split("|")[1];
		}
		if (bp.match(/ref/)) {
			if (bp.indexOf("<") >= 0) {
				bp = bp.split("<")[0];
			} else if (bp.indexOf("{")) {
				bp = bp.split("{")[0];
			}
		}
		return bp.trim();
	}
	
	function getWeight() {
		var weight;
		if (splitted[6].match(/sort/)) {
			weight = splitted[6].split("|")[2].split("}}")[0];
		} else {
			weight = splitted[6].split("|")[0];
		}
		weight = weight.replace(/ref|\{|\}|\||\[|\]/g, "");
		if (weight.indexOf("(") >= 0) {
			var index = weight.indexOf("("),
				period = parseInt(weight.substr(index + 1, index + 2), 10),
				lastDigit = parseInt(weight.substr(index - 1, index), 10);
			if (period >= 5) {
				lastDigit += 1;
				weight = weight.substr(0, index - 1) + lastDigit;	
			} else {
				weight = weight.substr(0, index);
			}
		}
		return weight.trim();
	}
	
	return {
		symbol: getSymbol(),
		name: getName(),
		desc: getDesc(),
		weight: getWeight(),
		density: getDensity(),
		meltingPoint: getMeltingPoint(),
		boilingPoint: getBoilingPoint()
	};
}
data.forEach(function (el, index) {
	if (index % 2 === 0) {
		element = parseElement(el);
		elements[element.symbol] = element;
	}
});

fs.writeFileSync("elements.json", JSON.stringify(elements, null, 4), "utf8");