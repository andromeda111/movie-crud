var express = require('express');
var router = express.Router();
var db = require('../db')

var heading = 'All Movies'
/* GET movies page. */
router.get('/', function(req, res, next) {
    db('movies').then(movies => {
        res.render('movies/index', {
          heading: heading,
          movies })
    })
})

router.get('/new', function(req, res, next) {
  res.render('movies/new');
});

router.get('/:id/edit', function(req, res, next) {
  var id = req.params.id;
    db('movies').select('*').where({id}).first().then(movie => {
        res.render('movies/edit', {
          heading: heading,
          movie })
    })
})

router.get('/:id', function(req, res, next) {
  var id = req.params.id;
    db('movies').select('*').where({id}).first().then(movie => {
        res.render('movies/show', {
          heading: heading,
          movie })
    })
})

router.post('/', (req, res, next) => {
  const movie = {
    title: req.body['new-title'],
    director: req.body['new-director'],
    year: req.body['new-year'],
    my_rating: req.body['new-rating'],
    poster_url: req.body['new-img-url']
  }
  db('movies').insert(movie, '*').then(newMovie => {
    var id = newMovie[0].id
    res.redirect('/movies/' + id)
  })
})

router.delete('/:id', (req, res, next) => {
  var id = req.params.id
  db('movies').del().where({id}).then(() => {
    res.redirect('/movies')
  })
})

router.put('/:id/edit', (req, res, next) => {
  var id = req.params.id
  const movie = {
    title: req.body['new-title'],
    director: req.body['new-director'],
    year: req.body['new-year'],
    my_rating: req.body['new-rating'],
    poster_url: req.body['new-img-url']
  }
  db('movies').where({id}).update(movie).then(() => {
    res.redirect('/movies/' + id)
  })

})

module.exports = router;
