/*
 * Author: Jose Salas
 * Created: 17 February 2021
 * License: Public Domain
*/

//find challenge, problems, and results divs
chadiv = $("#challenge");
prodiv = $("#problems");
resdiv = $("#results");

// create buttons for each div with their respective titles
chadiv.append("<button class=btn id=chabtn>Challenge Button</button>");
prodiv.append("<button class=btn id=probtn>Problems Button</button>");
resdiv.append("<button class=btn id=resbtn>Results Button</button>");

// when chabtn is clicked
$("#chabtn").click(function() {
  chadiv.toggleClass("special");
})

// when probtn is clicked
$("#probtn").click(function() {
  prodiv.toggleClass("special");
})

// when resbtn is clicked
$("#resbtn").click(function() {
  resdiv.toggleClass("special");
})
