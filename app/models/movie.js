import DS from 'ember-data';

export default DS.Model.extend({
  imdbID: DS.attr(),
  title: DS.attr(),
  year: DS.attr(),
  plot: DS.attr(),
  actors: DS.attr(),
  genre: DS.attr(),
  poster: DS.attr(),
  director: DS.attr(),
  imdbScore: DS.attr('number'),
  tomatoScore: DS.attr('number')
});
