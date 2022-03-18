import fonter from 'gulp-fonter'; /* преобразует из otf в ttf */


export const otfToTtf = () => {
    // ищем файлы с форматом otf
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`, {}) /* обращение к папке с исходниками */
    .pipe(app.plugins.plumber(app.plugins.notify({
        title: "FONTS",
        message: "Error: <%= error.message %>"
    })))
    // конвертируем в формат ttf
    .pipe(fonter({
        formats: ['ttf'],
    }))
    .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`))
}

export const ttfToWoff = () => {
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, {})
    .pipe(app.plugins.plumber(app.plugins.notify({
        title: "FONTS",
        message: "Error: <%= error.message %>"
    })))
    .pipe(fonter({
        formats: ['woff'],
    }))
    .pipe(app.gulp.dest(`${app.path.build.fonts}`))
}