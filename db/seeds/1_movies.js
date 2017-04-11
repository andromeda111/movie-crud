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
        poster_url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTg4MTU1MzgwOV5BMl5BanBnXkFtZTcwNjM1MTAwMQ@@._V1_.jpg'      },
      {
        id: 2,
        title: 'Kung Fury',
        director: 'David Sandberg',
        year: 2015,
        my_rating: 5,
        poster_url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjQwMjU2ODU5NF5BMl5BanBnXkFtZTgwNTU1NjM4NTE@._V1_SY999_CR0,0,702,999_AL_.jpg'
      },
      {
        id: 3,
        title: 'Guardians of the Galaxy',
        director: 'James Gunn',
        year: 2014,
        my_rating: 5,
        poster_url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_SY1000_CR0,0,674,1000_AL_.jpg'
      }
    ]);
  }).then(() => {
    return knex.raw(
      "SELECT setval('movies_id_seq', (SELECT MAX(id) FROM movies))"
    )
  })
};
