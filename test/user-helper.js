function makeUser(firstName, lastName, email) {
  return User({
    firstName: firstName || 'Chris',
    lastName: lastName || 'Davies',
    email: email || 'chris.davies@example.com'
  });
}
