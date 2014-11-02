import Ember from 'ember';

export default Ember.ObjectController.extend({
  imdbBarStyle: function() {
    var score = this.get('imdbScore');

    if(Ember.isEmpty(score)) {
      return "width: 0";
    }

    return "width: %@%".fmt(score * 10);
  }.property('imdbScore'),

  tomatoBarStyle: function() {
    var score = this.get('tomatoScore');

    if(Ember.isEmpty(score)) {
      return "width: 0";
    }

    return "width: %@%".fmt(score * 10);
  }.property('tomatoScore'),

  imdbScoreText: function() {
    var score = this.get('imdbScore');

    return Ember.isEmpty(score) ? '-' : score;
  }.property('imdbScore'),

  tomatoScoreText: function() {
    var score = this.get('tomatoScore');

    return Ember.isEmpty(score) ? '-' : score;
  }.property('tomatoScore'),

  url: function() {
    return 'http://www.imdb.com/title/%@/'.fmt(this.get("imdbID"));
  }.property('imdbID'),

  subtitleUrl: function() {
    /* global encodeURIComponent*/
    return 'http://www.subdivx.com/index.php?buscar=%@&accion=5&masdesc=&subtitulos=1&realiza_b=1'.fmt(encodeURIComponent(this.get('title')));
  }.property('title')
});
