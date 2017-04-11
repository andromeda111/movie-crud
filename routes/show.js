var express = require('express');
var router = express.Router();
var db = require('../db')


var title = 'The Movie Room'
var heading = 'Specific Movie'
/* GET individual movie page. */


router.get('/:id', function(req, res, next) {
    db('movies').select('*').where('id', req.params.id).then(movie => {
        res.render('movies/show', {
          title: title,
          heading: heading,
          movie })
    })
})

module.exports = router;
