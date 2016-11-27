/*jshint node:true*/
module.exports = {
  description: 'Installation blueprint for redux-saga-twiddle-demo',

  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addAddonsToProject({
      packages: [
        { name: 'ember-browserify', target: '^1.1.13' },
        { name: 'ember-maybe-import-regenerator', target: '^0.1.4' },
        { name: 'ember-redux', target: '^1.9.1' }
      ]
    }).then(function() {
      return this.addPackagesToProject([
        { name: 'redux-saga', target: '0.12.0' }
      ]);
    }.bind(this));
  }
};
