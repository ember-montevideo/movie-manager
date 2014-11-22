import Ember from 'ember';

function parseScore(value) {
  var score = parseFloat(value, 10);

  return isNaN(score) ? null : score;
}

export default Ember.ArrayController.extend({
  itemController: 'movie',

  actions: {
    createRecord: function() {
      var imdbid = this.get("imdbId"),
          store = this.store;

      $.getJSON("http://www.omdbapi.com/?i=" + imdbid + "&tomatoes=true").then(function(movie){
        store.createRecord('movie', {
          title: movie["Title"],
          year: movie["Year"],
          genre: movie["Genre"],
          actors: movie["Actors"],
          director: movie["Director"],
          plot: movie["Plot"],
          imdbScore: parseScore(movie["imdbRating"]),
          tomatoScore: parseScore(movie["tomatoRating"]),
          imdbID: movie["imdbID"],
          poster: movie["Poster"]
        }).save();

      });
    },

    deleteRecord: function(movie) {
      movie.destroyRecord();
    }
  }
});
