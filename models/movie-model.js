//este archivo es el que va a manejar las sentencias sql para la base de datos 
//sólo procesas lo que traemos o enviamos a la base de datos

const movieModel = require('./movie-schema');

const Movie = ()=>{

};

Movie.getAll = (cb)=>{
    movieModel.query("SELECT * FROM movie", cb) //el callback es el parametro que llega del controlador (movie-controler)
};

Movie.get = ()=>{

};

Movie.save = ()=>{

};

Movie.update = ()=>{

};

Movie.delete = ()=>{

};

module.exports = Movie;
