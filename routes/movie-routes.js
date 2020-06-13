const ControllerMovie = require('../controllers/movie-controller');

const controller = require('../controllers/movie-controller'),
    express = require('express'),
    router = express.Router();

router
    .get('/', controller.getAll)
    .get('/add', controller.add)
    .post('/', controller.saveAdd)
    .get('/update/:movie_id', controller.update)
    .put('/update/:movie_id', controller.saveUpdate) //aqui en crud sería post
    .delete('/delete/:movie_id', controller.delete) //aqui en crud sería post
    .use(controller.error404);



module.exports = router;