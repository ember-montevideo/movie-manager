import Ember from 'ember';

export default Ember.ObjectController.extend({
  imdbBarStyle: function() {
    return 'width: ' + this.get('imdbScore') + '%';
  }.property('imdbScore'),

  tomatoBarStyle: function() {
    return 'width: ' + this.get('tomatoScore') + '%';
  }.property('tomatoScore')
});
