import Ember from 'ember';

export default Ember.ObjectController.extend({
  imdbBarStyle: function() {
    return 'width: ' + this.get('imdbScore') * 10 + '%';
  }.property('imdbScore'),

  tomatoBarStyle: function() {
    return 'width: ' + this.get('tomatoScore') * 10 + '%';
  }.property('tomatoScore')
});
