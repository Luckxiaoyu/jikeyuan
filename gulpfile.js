var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    notify = require('gulp-notify'),
    htmlmin = require('gulp-htmlmin'),  //压缩html
    livereload = require('gulp-livereload');
//自定义任务 
// 样式处理任务
gulp.task('styles', function() {  
  return gulp.src('style/*.css')    //引入所有CSS
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('dist/css'))      //完整版输出
    .pipe(rename({ suffix: '.min' }))   //重命名
    .pipe(minifycss())                  //CSS压缩
    .pipe(gulp.dest('dist/style'))      //压缩版输出
    .pipe(notify({ message: '样式文件处理完成' }));
});

// JS处理任务
gulp.task('scripts', function() {  
  return gulp.src('js/*.js')      //引入所有需处理的JS
    // .pipe(jshint.reporter('default'))         //S代码检查
    .pipe(gulp.dest('dist/jsAll'))        //完整版输出
    .pipe(rename({ suffix: '.min' }))         //重命名
    .pipe(uglify())                           //压缩JS
    .pipe(gulp.dest('dist/js'))        //压缩版输出
    .pipe(notify({ message: 'JS文件处理完成' }));
});

// 图片处理任务
gulp.task('images', function() {  
  return gulp.src('images/*')        //引入所有需处理的JS
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))      //压缩图片
    .pipe(gulp.dest('dist/images'))
    .pipe(notify({ message: '图片处理完成' }));
});

//html处理
gulp.task('mHtml', function () {
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        // minifyCSS: true//压缩页面CSS
    };
    gulp.src('index.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('dist'));
});

//为项目添加默认执行的任务
gulp.task('build',['styles','scripts','images','mHtml']);
gulp.task('default',['build']);


