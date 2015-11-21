module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
	watch: {
		ghPages: {
			files: ["gh-pages-src/src/app.js", "gh-pages-src/src/*/*.js", "!gh-pages-src/src/*/*-test.js", "gh-pages-src/src/*/*.html", "gh-pages-src/src/sass/*.sass"],
			tasks: ["copy:ghPages", "concat:ghPages", "uglify:ghPages", "clean:ghPages", "sass:ghPages", "cssmin:ghPages"]
		}
	},
	sass: {
		ghPages: {
			files: {
				"gh-pages/stylesheets/main.css": "gh-pages-src/src/sass/main.sass"
			}
		}
	},
	cssmin: {
		ghPages: {
			files: {
				"gh-pages/stylesheets/main.min.css": "gh-pages/stylesheets/main.css"
			}
		}
	},
	copy: {
		ghPages: {
			files: [
				{ expand: true, cwd: "gh-pages-src/src/", src: "*/*.html", dest: "gh-pages/components/" },
				{ expand: true, cwd: "gh-pages-src/", src: "index.html", dest: "gh-pages/" }
			]
		}
	},
	concat: {
		dist: {
			src: [
				"src/angular-chemistry-app.js",
				"src/components/*/*.js",
				"!src/components/*/*-test.js"
			],
			dest: "src/components/<%= pkg.name %>-concat.js"
		},
		ghPages: {
			src: [
				"gh-pages-src/src/app.js",
				"gh-pages-src/src/*/*.js",				
				"!gh-pages-src/src/*/*-test.js"
			],
			dest: "gh-pages-src/src/app-concat.js"
		}
	},
    uglify: {
      build: {
        files: {
			"dest/<%= pkg.name %>.min.js": "src/components/<%= pkg.name %>-concat.js",
			"gh-pages/javascripts/<%= pkg.name %>.min.js": "src/components/<%= pkg.name %>-concat.js"
		}
      },
	  ghPages: {
		files: {
			"gh-pages/javascripts/app.min.js": "gh-pages-src/src/app-concat.js"
		}
	  }
    },
	clean: {
		build: ["src/components/angular-chemistry-concat.js"],
		ghPages: ["gh-pages-src/src/app-concat.js", "gh-pages/stylesheets/main.css"]
	}
  });
  
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-sass");
  
  grunt.registerTask("default", ["sass", "cssmin", "copy", "concat", "uglify", "clean"]);
  grunt.registerTask("watch-gh-pages", ["watch:ghPages"]);

};