import Ember from 'ember';

export default Ember.ArrayController.extend({
  itemController: 'movie',

  actions: {
    createRecord: function() {
      var imdbid = this.get("imdbId");
      var store = this.store;

      $.getJSON("http://www.omdbapi.com/?i=" + imdbid + "&tomatoes=true").then(function(movie){
        var imdbScore = parseInt(movie["imdbRating"], 10);
        if(isNaN(imdbScore)) {
          imdbScore = null;
        }

        var tomatoScore = parseInt(movie["tomatoRating"], 10);
        if(isNaN(tomatoScore)) {
          tomatoScore = null;
        }

        store.createRecord('movie', {
          title: movie["Title"],
          year: movie["Year"],
          genre: movie["Genre"],
          actors: movie["Actors"],
          plot: movie["Plot"],
          imdbScore: imdbScore,
          tomatoScore: tomatoScore,
          poster: movie["Poster"]
        }).save();

      });
    },

    deleteRecord: function(movie) {
      movie.destroyRecord();
    }
  }
});
