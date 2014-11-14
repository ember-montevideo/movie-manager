import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  year: DS.attr(),
  genre: DS.attr(),
  actors: DS.attr(),
  director: DS.attr(),
  plot: DS.attr(),
  imdbScore: DS.attr(),
  tomatoScore: DS.attr(),
  imdbID: DS.attr(),
  poster: DS.attr()
});
