import DS from 'ember-data';

function parseScore(value) {
  var score = parseInt(value, 10);

  return isNaN(score) ? null : score;
}

export default DS.JSONSerializer.extend({
  extract: function(store, type, payload, id) {
    var movie = {
      id: id,
      title: payload["Title"],
      year: payload["Year"],
      genre: payload["Genre"],
      actors: payload["Actors"],
      director: payload["Director"],
      plot: payload["Plot"],
      imdbScore: parseScore(payload["imdbRating"]),
      tomatoScore: parseScore(payload["tomatoRating"]),
      imdbID: payload["imdbID"],
      // poster can be 'N/A'
      poster: payload["Poster"]
    };

    // Creates or updates a movie
    store.createRecord('movie', movie);

    return movie;
  }
});
