import Ember from 'ember';

export default Ember.ArrayController.extend({
  itemController: 'movie',

  actions: {
    createRecord: function() {
      this.store.find('omdbmovie', this.get("imdbId"));
    },

    deleteRecord: function(movie) {
      movie.destroyRecord();
    }
  }
});
