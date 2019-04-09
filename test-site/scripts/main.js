var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/twoferrets.jpg');
    } else {
      myImage.setAttribute ('src','images/fluff-ferret.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Ferrets are awesome, ' + myName;
}

if(!localStorage.getItem('name')) {
setUserName();
} else {
var storedName = localStorage.getItem('name');
myHeading.textContent = 'Ferrets are awesome, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
