module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    copy: {
      main: {
        expand: true,
        cwd: 'src/',
        src: ["**/*.css"],
        dest: 'dist/css'
      }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'src/css',
          src: ['**/*.css', '!**/*.min.css'],
          dest: 'dist/css',
          ext: '.min.css'
        }]
      }
    },
    
    less: {
      desarrollo: {
          options: {
              paths: ['src/less']
          },
          files: [{
            expand: true,
            cwd: './src',
            src: ['**/*.less'], 
            ext: '.css',
            dest: 'dist/css/less'
          }]
      },

      produccion: {
          options: {
              paths: ['src/less'],
              modifyVars: {
                  bgColor: 'green',
                  fontColor: 'blue'
              }
          },
          files: [{
            expand: true,
            cwd: 'src/less',
            src: ['**/*.less'], 
            ext: '.css',
            dest: 'src/css'
          }]
      }
    },

    sass: {
      dist: {
        options: {
          sourcemap: false,
          compress: false,
          yuicompress: false,
          style: 'expanded',
        },
        files: {
          'dist/js/style.css' : 'src/style.scss'
        }
      },
    },

    browser_sync: {
      files: {
          src : 'dist/js/style.css',
      },
      options: {
          watchTask: true,
      },
    },

    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.registerTask('default',['watch']);
}
