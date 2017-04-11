var express = require('express');
var router = express.Router();
var db = require('../db')


var title = 'The Movie Room'
var heading = 'All Movies'
/* GET movies page. */
router.get('/', function(req, res, next) {
    db('movies').then(movies => {
        res.render('movies/index', {
          title: title,
          heading: heading,
          movies })
    })
})

module.exports = router;
