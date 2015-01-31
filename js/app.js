var firstNameInput = document.querySelector('.first-name');
var lastNameInput = document.querySelector('.last-name');
var emailInput = document.querySelector('.email-input');
var userIndex = document.querySelector('.user-index__list');
var userStore = ObjectStore();
var form = document.querySelector('.user-login__info');
var userArray = userStore.query();
var userDisplay = userArray.join('');
var firstClear = document.querySelector('.first-name');
var lastClear = document.querySelector('.last-name');
var emailClear = document.querySelector('.email-input');
var userSearch = document.querySelector('.user-search');
var userSort = document.querySelector('.user-sort');
var deleteUser = document.querySelector('.remove-user');


form.addEventListener('submit', function(e) {
  e.stopPropagation();
  e.preventDefault();
  addUser();
  firstClear.value = "";
  lastClear.value = "";
  emailClear.value = "";
});

deleteUser.addEventListener('click', function(e) {
  removeUser();
});

function addUser() {
  var newUser = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    email: emailInput.value
  };

  if(userStore.add(User(newUser))) {

    userStore.add(User(newUser));

    var listLi = document.createElement('li');
    var listDiv1 = document.createElement('div');
    var listDiv2 = document.createElement('div');
    var listDiv3 = document.createElement('div');
    // var listEdit = document.createElement('div');
    var listClose = document.createElement('div');

    var itemFirst = document.createTextNode(newUser.firstName);
    var itemLast = document.createTextNode(newUser.lastName);
    var itemEmail = document.createTextNode(newUser.email);
    // var itemEdit = document.createTextNode('j');
    var itemX = document.createTextNode('k');

    userIndex.appendChild(listLi);

    listLi.appendChild(listDiv1);
    listLi.appendChild(listDiv2);
    listLi.appendChild(listDiv3);
    // listLi.appendChild(listEdit);
    listLi.appendChild(listClose);

    listDiv1.appendChild(itemFirst);
    listDiv2.appendChild(itemLast);
    listDiv3.appendChild(itemEmail);
    // listEdit.appendChild(itemEdit);
    listClose.appendChild(itemX);

    listLi.className += "user-index__item";
    listDiv1.className += "user-name";
    listDiv2.className += "user-name";
    listDiv3.className += "user-email";
    // listEdit.className += "edit-user";
    listClose.className += "remove-user";
  }
}

function searchUser () {
  var searchInput = userSearch.value

  if (userSearch === userArray.some()) {
    alert('fire');
  }
}

function sortUser() {
  userArray.sort(function(a, b){
    var nameA = a.name.toLowerCase();
    var nameB = b.name.toLowerCase();
    if (nameA < nameB)
      return -1
    if (nameA > nameB)
      return 1
    return 0;
  });
}

function removeUser() {
  li.classList.remove("user-index__item");
}
