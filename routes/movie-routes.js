const ControllerMovie = require('../controllers/movie-controller');

const controller = require('../controllers/movie-controller'),
    express = require('express'),
    router = express.Router();

router
    .get('/', controller.getAll)
    .get('/movie/:movie_id', controller.get)
    .get('/movie/add', controller.add)
    .post('/', controller.saveAdd)
    .put('/movie/:movie_id', controller.update) //aqui en crud sería post
    .delete('/movie/:movie_id', controller.delete) //aqui en crud sería post
    .use(controller.error404);



module.exports = router;