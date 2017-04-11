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

router.get('/:id', function(req, res, next) {
  var id = req.params.id;
    db('movies').select('*').where({id}).first().then(movie => {
        res.render('movies/show', {
          heading: heading,
          movie })
    })
})
//
// router.post('/new', (req, res, next) => {
//   const { title, director, year, rating, imgUrl } = req.body
//   db('movies').then(movies => {
//       res.render('movies/index', {
//         heading: heading,
//         movies })
//   })
//
//
//
//   const guests = JSON.parse(guestsJSON)
//   guests.push({ name, imgUrl, item, inLegacy })
//   const guest = { name, imgUrl, item, inLegacy }
//
//   fs.writeFile(guestPath, JSON.stringify(guests), (writeErr) => {
//     if (writeErr) {
//       return next(writeErr)
//       }
//       res.send(guest)
//     })
//   })
// })

module.exports = router;
