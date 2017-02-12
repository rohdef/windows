"use strict";

module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);
  
  // load plugins
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-htmlmin");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-minjson");
  grunt.loadNpmTasks("grunt-karma");
  
  grunt.initConfig({
    package: grunt.file.readJSON("package.json"),
    bower: grunt.file.readJSON("bower.json"),
    buildFolder: "build/dist",

    copy: {
      build: {
        files: [{
          expand: true,
          cwd: "src/",
          src: ["**/*.php", "**/*.png"],
          dest: "<%= buildFolder %>"
        }]
      }
    },
    
    cssmin: {
      options: {
        roundingPrecision: -1
      },
      build: {
        files: [{
          src: ["src/*.css"],
          dest: "<%= buildFolder %>/css/<%= package.name %>.min.css"
        }]
      }
    },

    eslint: {
      target: ["."]
    },

    htmlmin: {
      build: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: [{
          expand: true,
          cwd: "src/",
          src: ["**/*.html"],
          dest: "<%= buildFolder %>"
        }]
      }
    },

    karma: {
      unit: {
        configFile: "karma.conf.js",
        background: true,
        singleRun: false
      },
      singleRunUnit: {
        configFile: "karma.conf.js",
        singleRun: true
      }
    },

    minjson: {
      build: {
        files: [{
          expand: true,
          cwd: "src/",
          src: ["**/*.json"],
          dest: "<%= buildFolder %>"
        }]
      }
    },
    
    uglify: {
      options: {
        mangle: true,
        compress: true,
        beautify: false,
        banner: "/*\n"
          + " * (c) Book Studenterkorsel ApS - <%= package.name %> - <%= grunt.template.today(\"yyyy-mm-dd\") %>\n"
          + " *\n"
          + " * This code belongs to Book Studenterkorsel ApS\n"
          + " * and is protected under the Danish copyright laws.\n"
          + " * \n"
          + " * You are *NOT* premitted to copy or use this code without explicit permission.\n */\n"
      },
      files: {
        src: ["src/app/modulesInit.js", "src/**/*!(modulesInit).js"],
        dest: "<%= buildFolder %>/scripts/<%= package.name %>.min.js"
      }
    },

    watch: {
      scripts: {
        files: ["src/**/*", "tests/**/*.js", "*.js"],
        tasks: ["watchBuild"],
        options: {
          spawn: false
        }
      }
    }
  });

  // register at least this one task
  grunt.registerTask("default", ["karma:unit:start", "watch"]);
  
  grunt.registerTask("minifyAndCopy", ["uglify", "copy", "cssmin", "htmlmin", "minjson"]);
  grunt.registerTask("build", ["eslint", "karma:singleRunUnit", "minifyAndCopy"]);
  grunt.registerTask("watchBuild", ["eslint", "karma:unit:run", "minifyAndCopy"]);

  // TODO rohdef, Marina - I am not sure I approve of this, then
  // rather run the "build" that runs the tests once
  grunt.registerTask("notest", ["eslint", "minifyAndCopy"]);
};
