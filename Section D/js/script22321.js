//For Loop for index and div containers
//console.log("For Loop to 10");
// for (var index = 0; index < 10; index++) {
//   console.log(index);
//
//   //create 10 div elements with a class name box inside the container div
//   var boxEl = document.createElement("div");
//   boxEl.className = "box";
//   boxEl.id = "box_id" + (index + 1);
//   document.getElementById("container").appendChild(boxEl);
// }

//translate to jQuery
for (var i=0; i<100; i++) {
  //color even boxes red, odd boxes green
  if (i%2 == 0) {
    $("#container").append("<div id='box_id_"+(i + 1)+"' class='box_even'>"+ i +"</div>");
  } else {
    $("#container").append("<div id='box_id_"+(i + 1)+"' class='box_odd'>"+ i +"</div>");
  }

}

// console.log("While Loop to 10");
// var counter = 0;
// while (counter < 10) {
//   //block of code
//   console.log(counter);
//
//   counter+= 1
// }
