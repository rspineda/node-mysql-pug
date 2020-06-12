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

ControllerMovie.add = (req, res, next)=>{
    res.render('add-form', {title:'Añadir Película a la base de datos'});
};

ControllerMovie.saveAdd = (req, res, next)=>{
    let newMovie = {
        movie_id : req.body.movie_id,
        title : req.body.title,
        release_year : req.body.release_year,
        rating : req.body.rating,
        image: req.body.image 
    };

    movieModel.save(newMovie, (err)=>{
        if(err){
            let locals = {
                title: `Error al grabar la nueva película con id: ${newMovie.movie_id}`,
                description: "Error de sintaxis",
                error: err
            }
            res.render("error", locals);
        }else{
            res.redirect("/");
        }
    })
};

ControllerMovie.update = (req, res, next)=>{
    let movie_id = req.params.movie_id;
    movieModel.update(movie_id, (err, result, fields)=>{
        if(err){
            let locals = {
                title: `Error al cargar la pelicula con id: ${movie_id} para editarla`,
                description: "Error de sintaxis",
                error: err
            }
            res.render("error", locals);
        }else{
            let locals = {
                title : "Editar pelicula",
                data : result
            }
            res.render("edit", locals);
        }
    })
};

ControllerMovie.saveUpdate = (req, res, next)=>{

};
ControllerMovie.delete = (req, res, next)=>{

};


module.exports = ControllerMovie;