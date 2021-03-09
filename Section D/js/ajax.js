function getAjaxData() {
//   $.ajax({
//     url:"https://en.wikipedia.org/api/rest_v1/page/title/Celeste%20%28video%20game%29",
//     type:"GET",
//     datatype:"text",
//     success:successFun,
//     error:errorFun,
//     complete:function(xhr,status){
//       console.log("The request has been done");
//     }
//   })
// }
//
//
// function successFun(result) {
//   console.log(result.items[0].title);
//
//   $("#ajax_text").html(result.items[0].title);
// }
//
// function errorFun(xhr, status, strErr) {
//   console.log("Error"+strErr);

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/Ysera",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "909f4c3445mshd86ad8d3cd0c6bfp1c3e7bjsn6848bc6d3df5",
		"x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
  $("#ajax_text").append("<img src="+response[0].img+">");
	console.log(response[0].img);
});

}


$("#ajax_get").click(getAjaxData);

//Rapid.api
//Wikimedia Rest api
