import Store from '../models/store';

export var initialize = function(container, app) {
  app.register('store:main', Store);
  app.inject('route', 'store', 'store:main');
};

export default {
  name: 'store',

  initialize: initialize
};
