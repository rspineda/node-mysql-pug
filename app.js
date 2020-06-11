const express = require('express'),
      bodyParser = require('body-parser'),  
      morgan = require('morgan'),
      helmet = require('helmet'),
      routes = require('./routes/movie-routes'),
      
      app = express();

app.set('view engine', 'pug');      
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan('dev'))
app.use(express.static('public'));
app.use(routes)  //en este caso el router (de routes) lo tengo como un middleware por eso le puedo hacer un use.



module.exports = app