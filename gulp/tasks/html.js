// src() - получает доступ к файлам и папкам по указанному пути 
// pipe() - действие
// dest() - вывод результата файла в папкку назначения (пункт назначения)
// если нужно использовать html, то нудно будет установить плагин gulp-include
import pug from "gulp-pug";
import versionNumber from 'gulp-version-number' /* чтобы данные не кэшировались, а обновлялись постоянно */

export const html = () => {
    return app.gulp.src(app.path.src.html)
    .pipe(app.plugins.plumber(app.plugins.notify({
        title: "HTML",
        message: "Error: <%= error.message %>"
    })))
    .pipe(pug())
    .pipe(versionNumber({
        'value': '%DT%', /* указываем текущую дату */
        'append': {
            'key': '_v',
            'cover': 0,
            'to': ['css', 'js'],
        },
        'output': {
            'file': 'gulp/version.json', /* будут храниться ключи */
        }
    }))
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browsersync.stream())
}