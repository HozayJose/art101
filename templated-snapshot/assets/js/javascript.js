//Author: Jose Salas
//Date: 2/16/21
//Liscense: CC

function submitBio () {

var nameVar = document.getElementById("name").value;
console.log(nameVar);

var emailVar = document.getElementById("email").value;
console.log(emailVar);


var messageVar = document.getElementById("message").value;
console.log(messageVar);

document.getElementById("above").innerHTML = "Name: " + nameVar + " Email: " + emailVar;
document.getElementById("below").innerHTML = messageVar;

}

document.getElementById("submit_bio_id").addEventListener("click", submitBio);

function colorMe() {
  document.getElementById("above").style.color = "purple";
}

document.getElementById("color_id").addEventListener("click", colorMe);
