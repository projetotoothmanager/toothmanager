const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const flash = require('express-flash')
const session = require('express-session'); // uma pasta dinamica
const cors = require('cors')
const FileStore = require('session-file-store')(session); // este modulo salva dentro da pasta session
const app = express();
const conn = require('./src/db/conn') // puxamos os dados da configuração do banco de dados
require('dotenv').config()

//*import routes
const index_routes = require('./src/routes/index_routes');
const auth_routes = require('./src/routes/auth_routes');
const cadastro_cliente_router = require('./src/routes/cadastro_cliente_router');
const agendamento_router = require('./src/routes/agendamento_router');
const prontuario_router = require('./src/routes/prontuario_routes');

//* models - Banco de dados
const cadastro_cliente = require('./src/models/cadastro_cliente')
const user = require('./src/models/user')
const agendamento = require('./src/models/agendamento')

//* view engine setup
app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));

//*leito de json
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));


//*sesion middleware
app.use(session({ // onde o express vai salva session, para deixar o usuario logado
  name: 'session',
  secret: 'nosso_secret', // segredo de criptografia
  resave: false, // caso a conexao caia ele tera que logar novamente
  saveUninitialized: false, //
  store: new FileStore({ //esta FileStore me permite grava arquivos da session
    logFn: function () {},
    path: require('path').join(require('os').tmpdir(), //caminho para chegar na pasta ssesion
      'sessions'),
  }),
  cookie: { // vamos salvar tempo para conexao
    secure: false, //
    maxAge: 990000, // tempo de session
    expires: new Date(Date.now() + 360000), // aqui descrimina o tempo
    httpOnly: true // como estamos em localhost fica em http
  }
}))


//* set session to res
app.use((req, res, next) => { // criamos a session
  if (req.session.userid) {
    res.locals.session = req.session
  }
  next()
})


//* flash messages
app.use(flash()) // msg do status de alteração de banco de dados


//*Pagina de Style
app.use(express.static(path.join(__dirname, 'public')));


//* routes
app.use('/', auth_routes)
app.use('/', index_routes);
app.use('/', cadastro_cliente_router);
app.use('/', agendamento_router);
app.use('/', prontuario_router);


//* catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});


//* error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});




conn
  .sync()
  // .sync({
  //   force: true
  // })
  .then(() => {
    app.listen(process.env.PORT);
  })
  .catch((err) => console.log(err));


module.exports = app;