var qunitUtils = {

  throwsException: function (description, fn) {
    QUnit.test(description, function (assert) {
      assert.throws(function () {
        fn(assert);
      });
    });
  },

  requireSpecStrings: function (properties, constructor, makeSpec) {
    function testSpecProperty(propertyName, propertyValue) {
      var spec = makeSpec();

      spec[propertyName] = propertyValue;

      constructor(spec);
    }

    for (var i = 0; i < properties.length; ++i) {
      var propertyName = properties[i];

      qunitUtils.throwsException(propertyName + ' is required', function () {
        testSpecProperty(propertyName, undefined);
      });

      qunitUtils.throwsException(propertyName + ' cannot be blank', function () {
        testSpecProperty(propertyName, ' ');
      });
    }
  }

}
