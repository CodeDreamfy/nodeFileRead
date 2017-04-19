var express = require('express');
var path = require('path');
var app = express()

var indexRouter = require('./routes/index');

// app.set('views', path.join(__dirname, 'static'));// 设置存放模板文件的目录
app.use(express.static(path.join(__dirname, 'static')));


app.use('/', indexRouter);

app.listen(3000)