$(window).scroll(function(){
  if($(window).scrollTop() > 5)
  {
    $('.navbar').addClass('fixed');
  }
  else
  { 
    $('.navbar').removeClass('fixed');
  }
});

// var request = new XMLHttpRequest();
// request.open('GET', 'http://swapi.co/api/people/', true);
// request.onload(blablabla)
// request.onerror(blablabla)
// request.send()


// var results = new XMLHttpRequest();
// $.get("http://swapi.co/api/people/",function(data){
//   results = parseJSON(data);
// });
// console.log(results);

var url = "http://swapi.co/api/people/?format=json";
var characters = [];

$.ajax({
	type: 'GET',
	url: url,
	dataType: 'json',
	success: function(data) {
		characters = data;
		getcharacters();
		console.log(characters);
	},
});

function getcharacters(page){
	// console.log(characters);
	console.log(characters.results[0].name);
	document.getElementById("name").innerHTML = characters.results[0].name;
	document.getElementById("gender").innerHTML = characters.results[0].gender;

};












// var url = 'http://starlord.hackerearth.com/cognizantinternal/dealshub';
// var deals = [];
// var clickcount0, clickcount1, clickcount2, clickcount3, clickcount4, clickcount5;

// $.ajax({
//   type: 'GET',
//   url: url,
//   dataType: 'json',
//   success: function(data) { 
//     deals = data.deals;
//     getdeals(1);
// },
// });

// function getdeals(page){
//   var i = 0;
//   var numDeal = (page - 1) * 6;
//   var numSolidStars = 0;

//   while (i<6){
//     document.getElementById("name"+i).innerHTML             = deals[numDeal].name;
//     document.getElementById("provider"+i).innerHTML         = deals[numDeal].provider;
//     document.getElementById("image"+i).src                  = deals[numDeal].image;
//     document.getElementById("rating"+i).innerHTML           = deals[numDeal].rating;
//     document.getElementById("link"+i).innerHTML             = deals[numDeal].link.substr(0,21);
//     document.getElementById("link"+i).href                  = deals[numDeal].link;
//     document.getElementById("actual_price"+i).innerHTML     = "₹ " + deals[numDeal].actual_price;
//     document.getElementById("discounted_price"+i).innerHTML = "₹ " + deals[numDeal].actual_price*parseInt(deals[numDeal].discount)/100;
//     document.getElementById("discount"+i).innerHTML         = deals[numDeal].discount + " off";
//     document.getElementById("likes"+i).innerHTML            = likeClick(i);
//     for(var j=0; j<Math.round(deals[numDeal].rating); j++)
//       document.getElementById("star"+i+j).className         = "fa fa-star";
    
//     numDeal++;
//     i++;
//   }
// }