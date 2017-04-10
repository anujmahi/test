/**
 * Created by Mausham on 4/8/2017.
 */
var gulp= require('gulp');
var exec=require('child_process').exec;

gulp.watch('./package.json',function(){
    gulp.run('manage')
})


gulp.task('build',function(){
   exec('npm pack',function(err){
       if(err)console.log("Error Building project")
       else{
           gulp.src('./*.tgz')
               .pipe(gulp.dest('../build'))
       }
   })

})

gulp.task('manage',function(){
    exec('npm install',function(err){
        if(err) console.log(err)
    })

})
gulp.task('default',['build'])