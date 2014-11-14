import DS from 'ember-data';

export default DS.Adapter.extend({
  find: function(store, type, id) {
    /* global encodeURIComponent */
    return $.getJSON('http://www.omdbapi.com/?i=%@&tomatoes=true'.fmt(encodeURIComponent(id)));
  }
});
