/*
  Unit tests for the User class.
*/

qunitUtils.throwsException('spec is required', User);

qunitUtils.requireSpecStrings(['firstName', 'lastName', 'email'], User, makeUser)

QUnit.test('users with the same email should be equal', function (assert) {
  var user1 = makeUser(),
    user2 = makeUser('Joe', 'Shmo', 'js@example.com');

  assert.ok(!user1.equal(user2));
  assert.ok(user1.equal(makeUser()));
});
