// Fonction pour afficher les chiffres de 0 à 9.
function chiffre_09() {
	var sequence = '';
	// Ne rien modifier au dessus de ce commentaire
	for (var chiffre = 0; chiffre <= 9; chiffre++){
		sequence += chiffre;
	}
	// Ne rien modifier au dessous de ce commentaire
	return sequence;
}

// Fonction pour afficher l'alphabet en minuscule
function alphabet_az() {
	var sequence = '';
	// Ne rien modifier au dessus de ce commentaire
	for (var lettre = 97; lettre <= 122; lettre++){
		sequence += String.fromCharCode(lettre); 
	}
	// Ne rien modifier au dessous de ce commentaire
	return sequence;
}

// Fonction pour afficher l'alphabet en minuscule en commençant par z
function alphabet_za() {
	var sequence = '';
	// Ne rien modifier au dessus de ce commentaire
	for (var super_lettre = 122; super_lettre >= 97; super_lettre--){
		sequence += String.fromCharCode(super_lettre);
	}
	// Ne rien modifier au dessous de ce commentaire
	return sequence;
}

// Fonction pour afficher l'alphabet en majuscule
function alphabet_AZ() {
	var sequence = '';
	// Ne rien modifier au dessus de ce commentaire
	for (var mega_lettre = 65; mega_lettre < 91; mega_lettre++){
		sequence += String.fromCharCode(mega_lettre);
	}
	// Ne rien modifier au dessous de ce commentaire
	return sequence;
}

// Fonction pour afficher l'alphabet une lettre sur deux en minuscule
function alphabet_aZ() {
	var sequence = '';
	// Ne rien modifier au dessus de ce commentaire
	for (var lettre = 97; lettre <= 122; lettre++){
		var temp = String.fromCharCode(lettre);
		if (lettre % 2 == 0){
			sequence += temp.toUpperCase();
		}
		else{
			sequence += temp; 
		}

	}

	console.log(sequence);
	// Ne rien modifier au dessous de ce commentaire
	return sequence;
}

// Fonction pour afficher la suite alphabétique de letter
function suite_az(letter) {
	var sequence = '';
	// Ne rien modifier au dessus de ce commentaire
	var alpha = letter.charCodeAt();
	while (alpha <= 122){
		sequence += String.fromCharCode(alpha);
		alpha++;
	}
	// Ne rien modifier au dessous de ce commentaire
	return sequence;
}

// Fonction pour transformer en minuscules
function transform_az(sentence) {
	var sequence = '';
	// Ne rien modifier au dessus de ce commentaire
	var alpha = sentence.toLowerCase();
	sequence += alpha;
	// Ne rien modifier au dessous de ce commentaire
	return sequence;
}

// Fonction pour transformer en majuscules
function transform_AZ(sentence) {
	var sequence = '';
	// Ne rien modifier au dessus de ce commentaire
	var alpha = sentence.toUpperCase();
	sequence += alpha;
	// Ne rien modifier au dessous de ce commentaire
	return sequence;
}

// Fonction pour retourner la position de search
function position_az(sentence, search) {
	var index = 0;
	// Ne rien modifier au dessus de ce commentaire
	
	for(var search of sentence)
	{
		console.log(sentence);
	}


	
	// Ne rien modifier au dessous de ce commentaire
	return index;
}

// Fonction pour remplacer search par rien
function replace_az(sentence, search) {
	var sequence = '';
	// Ne rien modifier au dessus de ce commentaire

	// Ne rien modifier au dessous de ce commentaire
	return sequence;
}

// Fonction pour inverser minuscule et majuscule
function inverse_azAZ(sentence) {
	var sequence = '';
	// Ne rien modifier au dessus de ce commentaire

	// Ne rien modifier au dessous de ce commentaire
	return sequence;
}

// Fonction pour afficher les caractères ligne par ligne
function decompose_string(sentence) {
	var sequences = '';
	// Ne rien modifier au dessus de ce commentaire

	// Ne rien modifier au dessous de ce commentaire
	return sequences;
}

// Fonction pour afficher une pyramide de hauteur height
function pyramide_easy(height) {
	var sequences = '';
	// Ne rien modifier au dessus de ce commentaire

	// Ne rien modifier au dessous de ce commentaire
	return sequences;
}