var firstNameInput = document.querySelector('.first-name');
var lastNameInput = document.querySelector('.last-name');
var emailInput = document.querySelector('.email-input');
var userIndex = document.querySelector('.user-index');
var userList = document.querySelector('.user-index__list');
var userListItem = document.querySelector('user-index__item');
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
  // Un-comment this function if other method won't work.
  addUser();
  // showUser();
  firstClear.value = "";
  lastClear.value = "";
  emailClear.value = "";
});

// userList.addEventListener('click', function(e) {
//   if (e.target.nodeName === 'itemX') {
//     removeUser();
//   }
// })
//
// function removeUser() {
//   userStore.remove(newUser);
// }

// This function works, but I'm trying other things.
//
function addUser() {
  var newUser = User({
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    email: emailInput.value
  });

  if(userStore.add(newUser)) {

    // userStore.add(User(newUser));

    var listLi = document.createElement('li');
    var listDiv1 = document.createElement('div');
    var listDiv2 = document.createElement('div');
    var listDiv3 = document.createElement('div');
    var listClose = document.createElement('div');
    var itemX = document.createElement('span');

    var itemFirst = document.createTextNode(newUser.firstName);
    var itemLast = document.createTextNode(newUser.lastName);
    var itemEmail = document.createTextNode(newUser.email);
    itemX.textContent = 'k';

    itemX.addEventListener('click', function() {
      userStore.remove(newUser);
    })

    userList.appendChild(listLi);

    listLi.appendChild(listDiv1);
    listLi.appendChild(listDiv2);
    listLi.appendChild(listDiv3);
    listLi.appendChild(listClose);

    listDiv1.appendChild(itemFirst);
    listDiv2.appendChild(itemLast);
    listDiv3.appendChild(itemEmail);
    listClose.appendChild(itemX);

    listLi.className += "user-index__item";
    listDiv1.className += "user-name";
    listDiv2.className += "user-name";
    listDiv3.className += "user-email";
    listClose.className += "remove-user";
  }

}

function removeUser(user) {
  userStore.remove(user);
}

// function refreshUserList() {
//   for (i = 0; i < userArray.length; ++i) {
//
//   }
// }
// 
// function sortUser() {
//   userArray.sort(function(a, b){
//     var nameA = a.firstName.toLowerCase();
//     var nameB = b.lastName.toLowerCase();
//     if (nameA < nameB)
//       return -1
//     if (nameA > nameB)
//       return 1
//     return 0;
//   });
// }
