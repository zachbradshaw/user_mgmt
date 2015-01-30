var firstNameInput = document.querySelector('.first-name');
var lastNameInput = document.querySelector('.last-name');
var emailInput = document.querySelector('.user-email');
var userIndex = document.querySelector('.user-index__item');
var userStore = ObjectStore();
var form = document.querySelector('.user-login__info');
var userArray = userStore.query();
var userDisplay = userArray.join('');

form.addEventListener('submit', function(e) {
  e.stopPropagation();
  e.preventDefault();
  addUser();
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
    var listSpan1 = document.createElement('span');
    var listSpan2 = document.createElement('span');
    var listSpan3 = document.createElement('span');

    var itemFirst = document.createTextNode(newUser.firstName);
    var itemLast = document.createTextNode(newUser.lastName);
    var itemEmail = document.createTextNode(newUser.email);

    userIndex.appendChild(listLi);

    listLi.appendChild(listSpan1);
    listLi.appendChild(listSpan2);
    listLi.appendChild(listSpan3);

    listSpan1.appendChild(itemFirst);
    listSpan2.appendChild(itemLast);
    listSpan3.appendChild(itemEmail);

    listLi.className += "list-item";
  }
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
