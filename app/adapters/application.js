import DS from 'ember-data';
import ENV from 'movie-manager/config/environment';

/* global Firebase */
export default DS.FirebaseAdapter.extend({
  firebase: new Firebase(ENV.firebaseURL)
});
