//var orig_text = $("#matching").children().html();

var orig_text = $("#matching h3").html();
console.log(orig_text);

function matchingFunction() {
  var input_text = $("#input_text").val();
  if (input_text.length > orig_text.length) {
    //alert("This is too long! Please delete and refresh.");
    $("#input_text").css("color","red");
  } else {
    $("#input_text").css("color","black");
    var substr_var = orig_text.substring(0, input_text.length);
  }

  //console.log(input_text);
  console.log(substr_var);

  if (input_text == orig_text) {
    //color green
    $("#input_text").css("border-color","green");
  } else if (input_text == 0) {
    //color grey
    $("#input_text").css("border-color","grey");
  } else if (input_text == substr_var) {
    //collor blue
    $("#input_text").css("border-color","blue");
  } else {
    //color red
    $("#input_text").css("border-color","red");
  }
}

$("#input_text").keyup(matchingFunction);
//keyup
