var userIndex = document.querySelector('.user-index');
var userList = document.querySelector('.user-index__list');
var userListItem = document.querySelector('user-index__item');
var userStore = ObjectStore();
var form = document.querySelector('.user-login__info');
var userArray = userStore.query();
var userDisplay = userArray.join('');
var userSearch = document.querySelector('.user-search');
var userSort = document.querySelector('.user-sort');
var deleteUser = document.querySelector('.remove-user');

userSearch.addEventListener('click', function(e) {
  alert('Our search feature is not functional at this time.');
});

userSort.addEventListener('click', function(e) {
  alert('Our sort feature is not functional at this time.');
});

form.addEventListener('submit', function(e) {
  e.stopPropagation();
  e.preventDefault();
  addUser();
  $('.first-name').val('');
  $('.last-name').val('');
  $('.email-input').val('');
});

function addUser() {
  var firstNameInput = $('.first-name');
  var lastNameInput = $('.last-name');
  var emailInput = $('.email-input');
  var newUser = User({
    firstName: firstNameInput.val(),
    lastName: lastNameInput.val(),
    email: emailInput.val()
  });

  if(userStore.add(newUser)) {

    $('.user-index__list').append(
      '<li class="user-index__item">' + 
        '<div class="user-name">' + newUser.firstName + '</div>' +
        '<div class="user-name">' + newUser.lastName + '</div>' +
        '<div class="user-email">' + newUser.email + '</div>' +
        '<span class="remove-user">' + 'k' + '<span>' +
      '</li>'
    );

    $('.remove-user').click(function () {
      $(this).parent().remove();
    })
  }
}

function removeUser(user) {
  userStore.remove(user);
}

function clearList() {
  while (userList.children.length > 0) {
    document.querySelector('.user-index__list').textContent = '';
  }
}
