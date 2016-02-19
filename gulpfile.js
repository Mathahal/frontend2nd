var gulp = require("gulp"),
    mainBowerFiles = require('main-bower-files'),
    concat = require('gulp-concat');
    


    gulp.task('concat', function(){
      return gulp.src(mainBowerFiles())
      .pipe(concat('all.js'))
      .pipe(gulp.dest('./dist/'));
    })
    
    gulp.task('watch', function(){
      // gulp.watch('./index2.html',['normalize'])
    })
    
    gulp.task('default', ['watch']);