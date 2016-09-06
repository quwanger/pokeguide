var url 		= 'http://pokeapi.co/api/';
var version = 'v2';
var resources = {
	"pokedex":"/pokedex/",
	"pokemon":"/pokemon/"
};

$(document).ready(function() {
	getNames();
});

/******************** EVENTS ********************/
$('select').on('change', function() {
	getSprites($(this).val() + '/');
});

/******************** GETTERS ********************/
function getNames() {
	$.getJSON(url + version + resources.pokedex + '1/', function(data) {
		setNames(data);
	});
}

function getSprites(id) {
	$.getJSON(url + version + resources.pokemon + id, function(data) {
		setSprites(data);
	});
}
/******************** GETTERS ********************/

/******************** SETTERS ********************/
function setNames(json) {
	var obj = json;

	$.each(obj.pokemon_entries, function(key, value) {
		var option = $('<option />').val(value.entry_number).text(value.pokemon_species.name);
		$(".dropdown-name").append(option);
	});

	$('#option-default').text('Select a Pokemon');
}

function setSprites(json) {
	var obj = json;

	$('<img />', {
    src: obj.sprites.front_default
	}).appendTo(".sprite-container");
}
/******************** SETTERS ********************/