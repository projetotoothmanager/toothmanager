const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const flash = require('express-flash')
const session = require('express-session'); // uma pasta dinamica
const FileStore = require('session-file-store')(session); // este modulo salva dentro da pasta session
const app = express();

//*importação controller
const authController = require('./src/controller/authcontroller')
const cadastro_cliente_Controller = require('./src/controller/cadastro_cliente_Controller')
const Agendamento_Controller = require('./src/controller/Agendamento_controller')
const Caixa_Controller = require('./src/controller/Pagamento_controller')
const prontuario_Controller = require('./src/controller/Prontuario_controller')
const Index_controller = require('./src/controller/Index_controller')

//*import routes
//aqui importamos todos os dados da pagina
const Index_routes = require('./src/routes/Index_routes');
const authRoutes = require('./src/routes/authRoutes');
const cadastro_cliente_Router = require('./src/routes/cadastro_cliente_Router');
const Agendamento_Router = require('./src/routes/Agendamento_router');
const Pagamentos_router = require('./src/routes/Pagamento_routes');
const Prontuario_router = require('./src/routes/Prontuario_routes');


//* view engine setup
app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));

//*leito de json
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
    maxAge: 360000, // tempo de session
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
app.use('/', authRoutes)
app.use('/', Index_routes);
app.use('/', cadastro_cliente_Router);
app.use('/', Agendamento_Router);
app.use('/', Pagamentos_router);
app.use('/', Prontuario_router);


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


module.exports = app;