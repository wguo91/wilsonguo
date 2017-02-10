module.exports = function(grunt) {
  // project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    jshint: {
      all: ["routes/*.js", "public/**/*.js", "config/**/*.js", "*.js"],
      options: {
        jshintrc: ".jshintrc",
        ignores: ["**/*.min.js"]
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        files: {
          "app.min.js": ["app.js"],
          "public/js/main.min.js": ["public/js/main.js"],
          "routes/index.min.js": ["routes/index.js"]
        }
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        shorthandPrecision: -1
      },
      target: {
        files: {
          "public/css/main.min.css": ["public/css/main.css"]
        }
      }
    }
  });
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-cssmin");

  grunt.registerTask("default", ["jshint", "uglify", "cssmin"]);
};
