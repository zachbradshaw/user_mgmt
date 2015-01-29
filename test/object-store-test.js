/*
  Tests the ObjectStore object
*/
QUnit.test('if an object has been added, it shows up in query', function(assert) {
  var item = TestObj('bob'),
      store = ObjectStore();

  assert.equal(store.query().length, 0);
  store.add(item);
  assert.equal(store.query().length, 1);
  assert.equal(store.query()[0], item);
});

QUnit.test('the same object cannot be added twice', function (assert) {
  var store = ObjectStore(),
      item1 = TestObj('bob'),
      item2 = TestObj('bob');

  assert.ok(store.add(item1));
  assert.ok(!store.add(item2), 'Duplicate objects were added');

  assert.equal(store.query().length, 1);
});

QUnit.test('exists is true if an object is in the store', function (assert) {
  var store = ObjectStore(),
      item = TestObj('jane');

  store.add(item);

  assert.ok(store.exists(TestObj('jane')));
  assert.ok(!store.exists(TestObj('bob')));
});

QUnit.test('remove removes an item from store', function (assert) {
  var item1 = TestObj('item1'),
      item2 = TestObj('item2'),
      store = ObjectStore();

  store.add(item1);
  store.add(item2);

  assert.ok(store.exists(item2), 'item2 should exist');
  assert.ok(store.exists(item1), 'item1 should exist');

  store.remove(item1);

  assert.ok(store.exists(item2), 'item2 should exist');
  assert.ok(!store.exists(item1), 'item1 should not exist');
});

// An object to use when testing ObjectStore
function TestObj(key) {
  return {
    key: key,

    equal: function (obj) {
      return key === obj.key;
    }
  };
}
