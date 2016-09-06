var url 		= 'http://pokeapi.co/api/';
var version = 'v2';
var resources = {
	"pokedex":"/pokedex/"
};
var regions = {
	"national":"1/",
	"kanto":"2/"
};
var pokedex;
var names;

$(document).ready(function() {
	main();
});

function main() {
	$.getJSON(url + version + resources.pokedex + regions.national, function(data) {
		getList(data);
	});
}

function getList(list) {
	pokedex = list;

	$.each(pokedex.pokemon_entries, function(key, value) {
		var option = $('<option />').val(value.entry_number).text(value.pokemon_species.name);
		$("#dropDownDest").append(option);
	});
}
