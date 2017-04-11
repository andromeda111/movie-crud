'use strict'

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
      {
        id: 1,
        title: 'The Room',
        director: 'Tommy Wiseau',
        year: 2003,
        my_rating: 2,
        poster_url: 'http://www.imdb.com/title/tt0368226/mediaviewer/rm2491850496?ref_=tt_ov_i'
      },
      {
        id: 2,
        title: 'Kung Fury',
        director: 'David Sandberg',
        year: 2015,
        my_rating: 5,
        poster_url: 'http://www.imdb.com/title/tt3472226/mediaviewer/rm1965028352?ref_=tt_ov_i'
      },
      {
        id: 3,
        title: 'Guardians of the Galaxy',
        director: 'James Gunn',
        year: 2014,
        my_rating: 5,
        poster_url: 'http://www.imdb.com/title/tt2015381/mediaviewer/rm1108790784?ref_=tt_ov_i'
      }
    ]);
  }).then(() => {
    return knex.raw(
      "SELECT setval('movies_id_seq', (SELECT MAX(id) FROM movies))"
    )
  })
};
