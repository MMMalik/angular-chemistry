(function () {
	"use strict";
	angular.module("angularChemistrySite")
		.controller("ReactionDirController", ReactionDirController);
	
	ReactionDirController.$inject = ["$sce"];	
	
	function ReactionDirController($sce) {
		var vm = this;
		vm.skipSanitize = function (html) {
			return $sce.trustAsHtml(html);
		};
		vm.directives = {
			chemEntity: {
				desc: "The <code>chemEntity</code> directive allows you to render chemical formulas and reaction arrows. " +
					"As a main feature, this directive parses the formula and inserts <code>&lt;sub&gt;&lt;/sub&gt;</code> and " +
					"<code>&lt;sup&gt;&lt;/sup&gt;</code> where needed.",
				info: "This directive creates an isolated scope. " +
					"It can be used either as an element <code>&lt;chem-entity&gt;&lt;/chem-entity&gt;</code> " +
					"or as an attribute <code>&lt;div chem-entity&gt;&lt;/div&gt;</code>. " +
					"It has a default priority 0.",
				hasParams: function () { return typeof this.params !== "undefined"; },
				params: {
					chemFormula: {
						type: "<code>string</code>",
						details: "<p>A string or &lcub;&lcub; expression &rcub;&rcub; to eval. " +
								"The formula can be given using simplified syntax, e.g. <code>H2SO4</code> or <code>Fe2(PO4)3</code>. " +
								"The parser places a number inside <code>&lt;sub&gt;&lt;/sub&gt;</code> tags if it " +
								"is preceeded by a letter or a bracket (<code>)</code>, <code>]</code>, or <code>}</code>). " +
								"A similar approach can be taken to show ions, e.g. <code>[Zn(NH3)4]^2+</code>. " +
								"The parser places the charge inside <code>&lt;sup&gt;&lt;/sup&gt;</code> tags if it is " +
								"preceeded by <code>^</code> sign and is ended with " +
								"<code>-</code> (hyphen) or <code>+</code>." +
								"The simplified approach is not always appropriate. For example, it will fail to " +
								"render <code>&amp;eta;^2-O2</code> correctly (see examples below).</p>" +
								"<p>A more explicit syntax can be used at any time. Everything placed inside <code>_(here)</code> " +
								"will be wrapped with <code>&lt;sub&gt;&lt;/sub&gt;</code> tags, whereas content placed within " +
								"<code>^(here)</code>, will be wrapped with <code>&lt;sup&gt;&lt;/sup&gt;</code> tags. For example, " +
								"<code>NH_(4)^(+)</code> or <code>Al_(2)Si_(4)O_(10)(OH)_(2)</code>. " +
								"This way, <code>&amp;eta;^(2)-O2</code> will be rendered correctly." +
								"The explicit and simplified syntax can be mixed. e.g. <code>NH4^(+)</code> or <code>C_12H_(22)O_(12)</code>.</p>" +
								"The html entities can be used within formulas."						
					},
					chemSub: {
						type: "<code>string</code>",
						details: "<p>A string or &lcub;&lcub; expression &rcub;&rcub; to eval. " +
								"Will be passed to <code>class</code> attribute in each <code>&lt;sub&gt;</code> tag in the formula. " +
								"Must be a defined css class, e.g. <code>&lt;style&gt; .red{ color: red; } &lt;/style&gt;</code> (example below)."
					},
					chemSup: {
						type: "<code>string</code>",
						details: "<p>A string or &lcub;&lcub; expression &rcub;&rcub; to eval. " +
								"Will be passed to <code>class</code> attribute in each <code>&lt;sup&gt;</code> tag in the formula. " +
								"Works analogously to <code>chemSub</code> (example below)."
					},
					chemAsIs: {
						type: "<code>string</code>",
						details: "<p>A string or &lcub;&lcub; expression &rcub;&rcub; to eval. " +
								"If set to \"true\", the formula will not be parsed (example below)."
					},
				},				
				examples: [ "H2SO4", "Fe2(PO4)3", "[Zn(NH3)4]^2+", "&eta;^2-O2",
					"&eta;^(2)-O2", "NH_(4)^(+)", "NH4^(+)", "Al_(2)Si_(4)O_(10)(OH)_(2)",
					"C_12H_(22)O_(12)"
				],
				examplesSub: [ "Fe2(PO4)3" ],
				examplesSup: [ "[Zn(NH3)4]^2+" ],
				examplesAsIs: [ "H2SO4" ]
			},
			chemScheme: {
				desc: "The <code>chemScheme</code> directive allows you to group multiple " +
					"<code>chemEntity</code> elements into a chemical reaction. ",
				info: "This directive creates an isolated scope. " +
					"It can be used either as an element <code>&lt;chem-entity&gt;&lt;/chem-entity&gt;</code> " +
					"or as an attribute <code>&lt;div chem-entity&gt;&lt;/div&gt;</code>. " +
					"It has a default priority 0.",
				hasParams: function () { return typeof this.params !== "undefined"; },
				examples: [ "H2SO4", "Fe2(PO4)3", "[Zn(NH3)4]^2+", "&eta;^2-O2",
					"&eta;^(2)-O2", "NH_(4)^(+)", "NH4^(+)", "Al_(2)Si_(4)O_(10)(OH)_(2)",
					"C_12H_(22)O_(12)"
				],
			},			
		};
	}
})();