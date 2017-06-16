// NAVBAR ANIMATION

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

// BUTTONS ANIMATION FADE-IN

$(document).ready(function(){
    $(".landing__button--fob").click(function(){
        $("#button__fob").fadeToggle("slow");
        $("#button__crf").fadeOut("slow");
        $("#button__cif").fadeOut("slow");
        $("#button__dat").fadeOut("slow");
        $("#button__dap").fadeOut("slow"); 
    });
    $(".landing__button--crf").click(function(){
        $("#button__crf").fadeToggle("slow");
        $("#button__fob").fadeOut("slow");
        $("#button__cif").fadeOut("slow");
        $("#button__dat").fadeOut("slow");
        $("#button__dap").fadeOut("slow"); 
    });

    $(".landing__button--cif").click(function(){
    	$("#button__cif").fadeToggle("slow");
        $("#button__crf").fadeOut("slow");
        $("#button__fob").fadeOut("slow");
        $("#button__dat").fadeOut("slow");
        $("#button__dap").fadeOut("slow"); 
    });

    $(".landing__button--dat").click(function(){
    	$("#button__dat").fadeToggle("slow");
    	$("#button__cif").fadeOut("slow");
        $("#button__crf").fadeOut("slow");
        $("#button__fob").fadeOut("slow"); 
        $("#button__dap").fadeOut("slow"); 
    });

    $(".landing__button--dap").click(function(){
    	$("#button__dap").fadeToggle("slow");
    	$("#button__dat").fadeOut("slow");
    	$("#button__cif").fadeOut("slow");
        $("#button__crf").fadeOut("slow");
        $("#button__fob").fadeOut("slow");  
    });

           
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

// CALL API http://swapi.co/

var url = "http://swapi.co/api/people/?format=json";
var urlPlanets = "http://swapi.co/api/planets/?format=json";

var characters = [];
var planets = [];

$.ajax({
	type: 'GET',
	url: url,
	dataType: 'json',
	success: function(data) {
		characters = data;
		getcharacters();
	},
});

$.ajax({
	type: 'GET',
	url: urlPlanets,
	dataType: 'json',
	success: function(data) {
		planets = data;
		getplanets();
		console.log(planets);
	},
});

// GET CHARACTERS
function getcharacters(page){
	// console.log(characters);
	console.log(characters.results[0].name);
	
	document.getElementById("name").innerHTML = characters.results[4].name;
	document.getElementById("name-2").innerHTML = characters.results[1].name;
	document.getElementById("name-3").innerHTML = characters.results[2].name;
	document.getElementById("name-4").innerHTML = characters.results[3].name;

	document.getElementById("gender").innerHTML = characters.results[4].gender;
	document.getElementById("gender-2").innerHTML = characters.results[1].gender;
	document.getElementById("gender-3").innerHTML = characters.results[2].gender;
	document.getElementById("gender-4").innerHTML = characters.results[3].gender;

};

// GET PLANETS
function getplanets(page){
	console.log(planets);
	document.getElementById("name-planet").innerHTML = planets.results[0].name;
	document.getElementById("name-planet-2").innerHTML = planets.results[1].name;
	console.log(planets.results[0].name);

}












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