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

	for (var i = 0; i < pokedex.pokemon_entries.length; i++) {
		$('div').append('<div>' + pokedex.pokemon_entries[i].pokemon_species.name + '</div>');
	}
}
