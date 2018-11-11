import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | registro-estudiante', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:registro-estudiante');
    assert.ok(route);
  });
});
