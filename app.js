var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// const express = require('express');
const app = express();
const nav=[
    {
        link:'/books',
        name:'Books'
    },
    {
        link:'/authors',
        name:'Authors'
    },
    
    
];
const homeRouter=require('./routes/homeRoutes')(nav);
const booksRouter=require('./routes/bookRoutes')(nav);
const authorsRouter=require('./routes/authorRoutes')(nav);
const adminRouter=require('./routes/adminRoutes')(nav);
const newauthorRouter=require('./routes/newauthorRoutes')(nav);
const updateauthorRouter=require('./routes/updateauthorroutes')(nav);
const updatebookRouter=require('./routes/updatebookroutes')(nav);

// const signupRouter=require('./routes/signupRoutes')(nav);
// const loginRouter=require('./routes/loginRoutes')(nav);

app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));
// app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/admin',adminRouter);
app.use('/newauthor',newauthorRouter);
app.use('/home',homeRouter);
app.use('/updateauthor',updateauthorRouter);
app.use('/updatebook',updatebookRouter);



// app.use('/signup',signupRouter);
// app.use('/login',loginRouter);
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var bodyParser = require('body-parser');
const session = require('express-session');
//const session = require('session');
// var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.bodyParser());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.bodyParser());
// Add this for session
// app.use(session({
//   secret: 'password',//add secret key
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: true }
// }));


app.use('/', indexRouter);
app.use('/users', usersRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
app.listen(5000);
