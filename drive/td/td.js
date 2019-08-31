// Fonction qui permet de vider l'écran
// Ne pas modifier cette fonction
function clean() {
	document.getElementById('td').children[0].innerHTML = '';
}

// Fonction qui permet d'ajouter des test à l'écran
// Ne pas modifier cette fonction
function add(method, param, expected, resultat) {
	var element = document.createElement('section');
	element.innerHTML = '<article>'
		+ 'Function ' + method + '(' + param + ');\n'
		+ 'Résultat attendu : "' + expected + '";\n'
		+ 'Résultat : "' + resultat + '";\n'
		+ 'Test : ' + (expected.localeCompare(resultat) == 0 ? 'ok' : 'echec') + ';\n\n'
		+ '</article>';
	document.getElementById('td').children[0].appendChild(element);
}

// Méthode pour gerer les évènements clavier.
document.addEventListener('keydown', (event) => {
	if (event.keyCode == 67) { // c
		clean();
	}
	if (event.keyCode == 49) { // 1
		td1_test();
	}
	if (event.keyCode == 50) { // 2
		td2_test();
	}
});

// Ne pas modifier cette fonction
function all_test() {
	td1_test();
	td2_test();
}

// Ne pas modifier cette fonction
function td1_test() {
	addition_test();
	soustraction_test();
	multiplication_test();
	division_test();
	division_reste_test();
	is_prime_test();
	is_even_test();
	is_odd_test();
	river_next_test();
	river_previous_test();
	river_meet_test();
	river_is_sequence_test();
	river_n_sequence_test();
	river_max_sequence_test();
	river_delimiter_test();
	river_unique_test();
}

// Ne pas modifier cette fonction
function addition_test() {
	add('addition', '40, 2', '42', addition(40, 2).toString());
}

// Ne pas modifier cette fonction
function soustraction_test() {
	add('soustraction', '48, 6', '42', soustraction(48, 6).toString());
}

// Ne pas modifier cette fonction
function multiplication_test() {
	add('multiplication', '3, 7', '21', multiplication(3, 7).toString());
}

// Ne pas modifier cette fonction
function division_test() {
	add('division', '30, 10', '3', division(30, 10).toString());
}

// Ne pas modifier cette fonction
function division_reste_test() {
	add('division_reste', '54, 8', '6', division_reste(54, 8).toString());
}

// Ne pas modifier cette fonction
function is_prime_test() {
	add('is_prime', '12', '0', is_prime(12).toString());
}

// Ne pas modifier cette fonction
function is_even_test() {
	add('is_even', '24', '1', is_even(24).toString());
}

// Ne pas modifier cette fonction
function is_odd_test() {
	add('is_odd', '56', '0', is_odd(56).toString());
}

// Ne pas modifier cette fonction
function river_next_test() {
	add('river_next', '42', '48', river_next(42).toString());
}

// Ne pas modifier cette fonction
function river_previous_test() {
	add('river_previous', '42, 66', '60', river_previous(42, 66).toString());
}

// Ne pas modifier cette fonction
function river_meet_test() {
	add('river_meet', '42, 51', '111', river_meet(42, 51).toString());
}

// Ne pas modifier cette fonction
function river_is_sequence_test() {
	add('river_is_sequence', '42, 574', '0', river_is_sequence(42, 574).toString());
}

// Ne pas modifier cette fonction
function river_n_sequence_test() {
	add('river_n_sequence', '42, 3', '42 ; 48 ; 60.', river_n_sequence(42, 3).toString());
}

// Ne pas modifier cette fonction
function river_max_sequence_test() {
	add('river_max_sequence', '42, 65', '42 ; 48 ; 60 ; 66.', river_max_sequence(42, 65).toString());
}

// Ne pas modifier cette fonction
function river_delimiter_test() {
	add('river_delimiter', '42, 2, 4', '48 ; 60 ; 66.', river_delimiter(42, 2, 4).toString());
}

// Ne pas modifier cette fonction
function river_unique_test() {
	add('river_unique', '100', '1 ; 3 ; 5 ; 7 ; 9 ; 20 ; 31 ; 42 ; 53 ; 64 ; 75 ; 86 ; 97.', river_unique(100).toString());
}

// Ne pas modifier cette fonction
function td2_test() {
	chiffre_09_test();
	alphabet_az_test();
	alphabet_za_test();
	alphabet_AZ_test();
	alphabet_aZ_test();
	suite_az_test();
	transform_az_test();
	transform_AZ_test();
	position_az_test();
	replace_az_test();
	inverse_azAZ_test();
	decompose_string_test();
	pyramide_easy_test();
}

// Ne pas modifier cette fonction
function chiffre_09_test() {
	add('chiffre_09', 'none', '0123456789', chiffre_09().toString());
}

// Ne pas modifier cette fonction
function alphabet_az_test() {
	add('alphabet_az', 'none', 'abcdefghijklmnopqrstuvwxyz', alphabet_az().toString());
}

// Ne pas modifier cette fonction
function alphabet_za_test() {
	add('alphabet_za', 'none', 'zyxwvutsrqponmlkjihgfedcba', alphabet_za().toString());
}

// Ne pas modifier cette fonction
function alphabet_AZ_test() {
	add('alphabet_AZ', 'none', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', alphabet_AZ().toString());
}

// Ne pas modifier cette fonction
function alphabet_aZ_test() {
	add('alphabet_aZ', 'none', 'aBcDeFgHiJkLmNoPqRsTuVwXyZ', alphabet_aZ().toString());
}

// Ne pas modifier cette fonction
function suite_az_test() {
	add('suite_az', 'h', 'hijklmnopqrstuvwxyz', suite_az('h').toString());
}

// Ne pas modifier cette fonction
function transform_az_test() {
	add('transform_az', 'Je sUiS uN StrinG !', 'je suis un string !', transform_az('Je sUiS uN StrinG !').toString());
}

// Ne pas modifier cette fonction
function transform_AZ_test() {
	add('transform_AZ', 'Je sUiS uN StrinG !', 'JE SUIS UN STRING !', transform_AZ('Je sUiS uN StrinG !').toString());
}

// Ne pas modifier cette fonction
function position_az_test() {
	add('position_az', 'Je sUiS uN StrinG', '6', position_az('Je sUiS uN StrinG', 'S').toString());
}

// Ne pas modifier cette fonction
function replace_az_test() {
	add('replace_az', 'Je sUiS uN StrinG', 'Je sUS uN StrnG', replace_az('Je sUiS uN StrinG', 'i').toString());
}

// Ne pas modifier cette fonction
function inverse_azAZ_test() {
	add('inverse_azAZ', 'Je sUiS uN StrinG !', 'jE SuIs Un sTRINg !', inverse_azAZ('Je sUiS uN StrinG !').toString());
}

// Ne pas modifier cette fonction
function decompose_string_test() {
	add('decompose_string', 'Hello World !', '\nH\ne\nl\nl\no\n \nW\no\nr\nl\nd\n \n!', '\n' + decompose_string('Hello World !').toString());
}

// Ne pas modifier cette fonction
function pyramide_easy_test() {
	add('pyramide_easy', '3', '\n  /*\\\n /***\\\n/*****\\', '\n' + pyramide_easy(3).toString());
}