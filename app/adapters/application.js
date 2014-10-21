import DS from 'ember-data';

export default DS.FirebaseAdapter.extend({
  firebase: new Firebase('https://movie-manager.firebaseio.com/movie')
});
