import Ember from 'ember';
import Movie from './movie';

export default Ember.Object.extend({
  find: function() {
    return [
      Movie.create({
        title: 'The Startup Kids',
        year: 2012,
        plot: 'Lorem ipsum dolor',
        actors: 'Mike Butcher, Carter Cleveland',
        genre: 'Documentary, Biography',
        poster: 'http://ia.media-imdb.com/images/M/MV5BMjA2NDgwNDk5Ml5BMl5BanBnXkFtZTcwOTEyMTI3OA@@._V1_SX.jpg',
        imdbScore: 80,
        tomatoScore: 74
      }),
      Movie.create({
        title: 'The End Is the Beginning',
        year: 2011,
        plot: 'Lorem ipsum dolor',
        actors: 'Hannah Marder, Kyle Goleman, Olivia Larsen, Braden Gray',
        genre: 'Drama',
        poster: 'http://ia.media-imdb.com/images/M/MV5BOTk5NzI3NTIwOF5BMl5BanBnXkFtZTgwOTA1Mzk2MDE@._V1_SX.jpg',
        imdbScore: 50,
        tomatoScore: 75
      })
    ];
  }
});
