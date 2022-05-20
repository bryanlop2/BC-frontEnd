module.exports = function(grunt) {  
    grunt.initConfig({
      less: {
        development: {
          options: {
            compress: true,
            yuicompress: true,
            optimization: 2
          },
          files: {
            "dist/js/styleLess.css": 'src/pokemon.less' 
          }
        }
      },
      watch: {
        styles: {
          files: ['less/**/*.less'], 
          tasks: ['less'],
          options: {
            nospawn: true
          }
        }
      }
    });
  
    grunt.registerTask('default', ['less', 'watch']);
  };