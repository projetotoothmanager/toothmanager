const createError = require('http-errors');
const express = require('express');
const path = require('path');
//const cookieParser = require('cookie-parser');
const logger = require('morgan');
const flash = require('express-flash')
const session = require('express-session');
const cors = require('cors')
const FileStore = require('session-file-store')(session);
const app = express();
const conn = require('./src/db/conn')
const methodOverride = require('method-override');
require('dotenv').config()

const authRoutes = require('./src/routes/authRoutes');
const cadastroClienteRouter = require('./src/routes/cadastroClienteRouter');
const agendamentoRouter = require('./src/routes/agendamentoRouter');
const prontuarioRouter = require('./src/routes/prontuarioRoutes');

app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(methodOverride('_method'))


app.use(session({
  name: 'session',
  secret: 'nosso_secret',
  resave: false,
  saveUninitialized: false,
  store: new FileStore({
    logFn: function () {},
    path: require('path').join(require('os').tmpdir(),
      'sessions'),
  }),
  cookie: {
    secure: false,
    maxAge: 9900000,
    expires: new Date(Date.now() + 360000),
    httpOnly: true
  }
}))

app.use((req, res, next) => {
  if (req.session.userid) {
    res.locals.session = req.session
  }
  next()
})

app.use(flash())

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', authRoutes)
app.use('/', cadastroClienteRouter);
app.use('/', agendamentoRouter);
app.use('/', prontuarioRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

conn
  .sync()
  //.sync({force: true})
  .then(() => {
    app.listen(process.env.PORT);
  })
  .catch((err) => console.log(err));

module.exports = app;