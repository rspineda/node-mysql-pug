const express = require('express'),
      bodyParser = require('body-parser'),  
      morgan = require('morgan'),
      helmet = require('helmet'),
      routes = require('./routes/movie-routes'),
      methodOverride = require('method-override'), //para poder manejar las rutas PUT y DELETE
      app = express();

app.set('view engine', 'pug');      
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride(function (req, res) { 
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      var method = req.body._method
      delete req.body._method
      return method
    }
  }));
app.use(morgan('dev'))
app.use(express.static('public'));
app.use(routes);  //en este caso el router (de routes) lo tengo como un middleware por eso le puedo hacer un use.



module.exports = app