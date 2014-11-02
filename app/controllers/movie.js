import Ember from 'ember';

export default Ember.ObjectController.extend({
  imdbBarStyle: function() {
    var imdbScore = this.get('imdbScore');
    if(Ember.isEmpty(imdbScore)) {
      return "width: 0";
    }
    else {
      return "width: %@%".fmt(imdbScore * 10);
    }
  }.property('imdbScore'),

  tomatoBarStyle: function() {
    var tomatoScore = this.get('tomatoScore');
    if(Ember.isEmpty(tomatoScore)) {
      return "width: 0";
    }
    else {
      return "width: %@%".fmt(tomatoScore * 10);
    }
  }.property('tomatoScore'),

  imdbScoreNormalized: function() {
    var imdbScore = this.get('imdbScore');
    return Ember.isEmpty(imdbScore) ? 'N/A' : imdbScore;
  }.property('imdbScore'),

  tomatoScoreNormalized: function() {
    var tomatoScore = this.get('tomatoScore');
    return Ember.isEmpty(tomatoScore) ? 'N/A' : tomatoScore;
  }.property('tomatoScore'),
});
