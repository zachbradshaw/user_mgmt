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


form.addEventListener('submit', function(e) {
  e.stopPropagation();
  e.preventDefault();
  addUser();
  firstClear.value = "";
  lastClear.value = "";
  emailClear.value = "";
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

    var itemFirst = document.createTextNode(newUser.firstName);
    var itemLast = document.createTextNode(newUser.lastName);
    var itemEmail = document.createTextNode(newUser.email);

    userIndex.appendChild(listLi);

    listLi.appendChild(listDiv1);
    listLi.appendChild(listDiv2);
    listLi.appendChild(listDiv3);

    listDiv1.appendChild(itemFirst);
    listDiv2.appendChild(itemLast);
    listDiv3.appendChild(itemEmail);

    listLi.className += "user-index__item";
    listDiv1.className += "user-name";
    listDiv2.className += "user-name";
    listDiv3.className += "user-email";
  }
}

function searchUser () {
  
}

// listAdditionFirst();
// listAdditionEmail();
// var emailNode = document.createTextNode(newUser.email);
// userIndex.appendChild(emailNode)

// function listAdditionEmail {
//   var emailNode = document.createTextNode(newUser.email);
//   userIndex.appendChild(emailNode)
// }
//
// function listAdditionFirst {
//   var firstNameNode = document.createTextNode(newUser.firstName);
//   userIndex.appendChild(firstNameNode)
// }

// var emailNode = document.createTextNode(newUser.email);
// user-index.appendChild(emailNode)


// var emailNode = document.createTextNode(userArray[i].email);
// user-index__item.appendChild(emailNode)

// function listAddition () {
//   for (var i = 0; i < userArray.length; ++i) {
//     document.querySelector('user-index').textContent = userArray[i].firstName;
//   }
//   for (var i = 0; i < userArray.length; ++i) {
//     document.querySelector('user-index').textContent= userArray[i].lastName;
//   }
//   for (var i = 0; i < userArray.length; ++i) {
//     document.querySelector('.user-index').textContent = userArray[i].email;
//   }
// }

// userArray[i].firstName, userArray[i].lastName, userArray[i].email;
