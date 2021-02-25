/*
 * Author: Anna Yu ,Jose Salas
 * Created: 22 February 2021
 * License: Public Domain
*/

function sortingHat(str) {
  var length = str.length;
  var rem = length % 4;
  if (rem == 0) {
    return "Gryffindor";
  } else if (rem == 1) {
    return "Ravenclaw";
  } else if (rem == 2) {
    return "Slytherin";
  } else {
    return "Hufflepuff";
  }
  // var houses = ["Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff"];
  // return houses[rem];
}

$("#button").click(function() {
  var name = $("#input").val();
  var house = sortingHat(name);
  houseText = "<p> The Sorting Hat has sorted you into " + house + "!</p>"
  $("#output").html(houseText);
  switch(house) {

    case "Gryffindor":
      alert("Daring and brave");
      break;

    case "Ravenclaw":
      alert("Smart and creative");
      break;

    case "Slytherin":
      alert("Sly and minimalistic");
      break;

    case "Hufflepuff":
      alert("Compassionate and well-rounded");
      break;
  }


});
