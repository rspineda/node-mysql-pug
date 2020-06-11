//este archivo se va a encargar de procesasr lo que va a visualizar el cliente, pasando las ordenes al modelo(base de datos) o al cliente
const movieModel = require('../models/movie-model'); 


const ControllerMovie = ()=>{
};

ControllerMovie.error404 = (req, res, next)=>{

};
ControllerMovie.getAll = (req, res, next)=>{
    movieModel.getAll((err, result, fields)=>{  //result me da las filas de la tabla
        if(err){
            let locals = {
                title: "ERROR 404",
                description: "RECURSO NO ENCONTRADO",
                error: error
            }
            res.render("error", locals);
        }else{
            let locals ={
                title: 'Lista de peliculas',
                data: result
            }
            res.render('index', locals);
        }
    });
};
ControllerMovie.get = (req, res, next)=>{

};
ControllerMovie.add = (req, res, next)=>{

};
ControllerMovie.saveAdd = (req, res, next)=>{

};
ControllerMovie.update = (req, res, next)=>{

};
ControllerMovie.delete = (req, res, next)=>{

};


module.exports = ControllerMovie;