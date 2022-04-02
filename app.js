const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

//*import routes
//aqui importamos todos os dados da pagina
const indexRouter = require('./src/routes/index');
const authRoutes = require('./src/routes/authRoutes');

// view engine setup
app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));


//leito de json
app.use(express.json());

app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());

//Pagina de Style
app.use(express.static(path.join(__dirname, 'public')));


//* routes
app.use('/', authRoutes)

app.use('/', indexRouter);



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;