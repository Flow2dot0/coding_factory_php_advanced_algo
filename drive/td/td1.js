// Fonction pour additionner a et b
function addition(a, b) {
	var operation = 0;
	// Ne rien modifier au dessus de ce commentaire
	operation = a + b;
	// Ne rien modifier au dessous de ce commentaire
	return operation;
}

// Fonction pour soustraire b de a
function soustraction(a, b) {
	var operation = 0;
	// Ne rien modifier au dessus de ce commentaire
	operation = a - b;
	// Ne rien modifier au dessous de ce commentaire
	return operation;
}

// Fonction pour multiplier a et b
function multiplication(a, b) {
	var operation = 0;
	// Ne rien modifier au dessus de ce commentaire
	operation = a * b;
	// Ne rien modifier au dessous de ce commentaire
	return operation;
}

// Fonction pour diviser a par b
function division(a, b) {
	var operation = 0;
	// Ne rien modifier au dessus de ce commentaire
	operation = a / b;
	// Ne rien modifier au dessous de ce commentaire
	return operation;
}

// Fonction pour obtenir le reste de la division de a par b
function division_reste(a, b) {
	var operation = 0;
	// Ne rien modifier au dessus de ce commentaire
	operation = a % b;
	// Ne rien modifier au dessous de ce commentaire
	return operation;
}

// Fonction pour savoir si a est premier
function is_prime(a) {
	var is = 1;
	// Ne rien modifier au dessus de ce commentaire
	
	if(isNaN(a)){
		is = -1;
	}else {

		for (var i = 2; i <= a; i++) {
			if (a % i != 0){
				is = 1;
			}
			else if (a % i == 0){
				is = 0;
			} 
			
		} 
	}
	// Ne rien modifier au dessous de ce commentaire
	return is;
}

// Fonction pour savoir si a est pair
function is_even(a) {
	var is = 1;
	// Ne rien modifier au dessus de ce commentaire
	if(isNaN(a)){
		is = -1;
	}
	else {
		if (a % 2 == 0){
			is = 1;
		}
		else {
			is = 0;
		}
	}
	// Ne rien modifier au dessous de ce commentaire
	return is;
}

// Fonction pour savoir si a est pair
function is_odd(a) {
	var is = 1;
	// Ne rien modifier au dessus de ce commentaire
	if(isNaN(a)){
		is = -1;
	}
	else{
		if(a % 2 == 0){
			is = 0;
		}
		else{
			is = 1;
		}
	}
	// Ne rien modifier au dessous de ce commentaire
	return is;
}

// Fonction pour obtenir la séquence suivante de la rivière de river
function river_next(river) {
	var sequence = '';
	// Ne rien modifier au dessus de ce commentaire
	var chaine = river.toString();
	var int = river;
	for(var item of chaine) {
		int = int + parseInt(item);
	}
	sequence = int;
	// Ne rien modifier au dessous de ce commentaire
	return sequence;
}

// Fonction pour obtenir la séquence précédente de sequence de la rivière de river
function river_previous(river, next) {
	var sequence = '';
	// Ne rien modifier au dessus de ce commentaire

	//INCOMPLET
	while(river < next)
	{
		river = river_next(river);
	}

	for(var i = river; river < next-1; i)
	sequence = river;
	
	// Ne rien modifier au dessous de ce commentaire
	return sequence;
}

// Fonction pour obtenir la séquence où se rencontre la rivière a et la rivière b
function river_meet(river_a, river_b) {
	var sequence = '';
	// Ne rien modifier au dessus de ce commentaire

	// Ne rien modifier au dessous de ce commentaire
	return sequence;
}

// Fonction pour savoir si la séquenceest présente dans la rivière de river
function river_is_sequence(river, sequence) {
	var is = 1;
	// Ne rien modifier au dessus de ce commentaire

	// Ne rien modifier au dessous de ce commentaire
	return is;
}

// Fonction pour obtenir n séquence(s) de la rivière de river
function river_n_sequence(river, n) {
	var sequences = '';
	sequences += river + ' ; ';
	// Ne rien modifier au dessus de ce commentaire
	for(var i = 1; i < n; i++) {
		river = river_next(river);
		if(i === n-1) {
			sequences += river.toString() + '.';

		}else {
			sequences += river.toString() + ' ; ';

		}

		// TODO FAIRE LE TYPAGE
	}
	// Ne rien modifier au dessous de ce commentaire
	return sequences;
}

// Fonction pour obtenir un nombre de séquence max de la rivière de river
function river_max_sequence(river, max) {
	var sequences = '';
	// Ne rien modifier au dessus de ce commentaire

	// Ne rien modifier au dessous de ce commentaire
	return sequences;
}

// Fonction pour obtenir les séquences de la rivière de river entre l'index start et l'index end
function river_delimiter(river, index_start, index_end) {
	var sequences = '';
	// Ne rien modifier au dessus de ce commentaire

	// Ne rien modifier au dessous de ce commentaire
	return sequences;
}

// Fonction pour obtenir les rivières uniques entre 1 et max
function river_unique(max) {
	var rivers = '';
	// Ne rien modifier au dessus de ce commentaire

	// Ne rien modifier au dessous de ce commentaire
	return rivers;
}