/*module.exports = function(grunt){

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> *//*\n'
            },
            build: {
                files: {
                    'dist/js/pokemon.min.js': 'src/pokemon.js',
                    'dist/js/pokemonstyles.min.js': 'src/test.js',
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.registerTask('default', ['uglify'])
}
*/
module.exports = function(grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
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
      watch: {
        css: {
          files: '**/*.scss',
          tasks: ['sass']
        }
      }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default',['watch']);
  }

  