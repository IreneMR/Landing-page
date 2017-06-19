// CALL API http://swapi.co/
import styles from "../styles/index.scss";

var url = "http://swapi.co/api/people/?format=json";
var urlPlanets = "http://swapi.co/api/planets/?format=json";

var characters = [];
var planets = [];

//SWIP INPUTS TAB
$(function (){
    $('#changePlanet').on('click', function(){
        console.log('holi');
        var pickvalue = $('#changeValue').val();
        $('#changeValue').val($('#changeValue2').val());
        $('#changeValue2').val(pickvalue);
    });
});

// GET CHARACTERS
function getcharacters(page){
    $('.caption').each(function(){
        var $this = $(this);
        var $charNumber = $this.data('character');
        $this.find(".name").html(characters.results[$charNumber].name);
        $this.find(".gender").html(characters.results[$charNumber].gender);
        $this.find(".birth").html(characters.results[$charNumber].birth_year);
        $this.find(".hair").html(characters.results[$charNumber].hair_color);
        $this.find(".eyes").html(characters.results[$charNumber].eye_color);
    });
};

$.ajax({
    type: 'GET',
    url: url,
    dataType: 'json',
    success: function(data) {
        characters = data;
        getcharacters();
        
    },
    error: function(){
        console.log('error');
    }
});

// NAVBAR ANIMATION

$(window).scroll(function(){
  if($(window).scrollTop() > 5){
    $('.navbar').addClass('fixed');
  }else{ 
    $('.navbar').removeClass('fixed');
  }
});



$(function(){

    // BUTTONS ANIMATION FADE-IN
    $(".landing__button--char").click(function(){
        $(".button__text").fadeOut("slow");
        $(this).siblings(".button__text").fadeIn("slow");
    });

    // BUTTON PILLS SHOW TEXT
    $(".landing__button--text").click(function(){
        var $this     = $(this);
        var $pillText = $this.data('text');
        $(".landing__button--text").removeClass('active');
        $this.addClass('active');
        $('.landing__pill--text').html($pillText);
    });
});
