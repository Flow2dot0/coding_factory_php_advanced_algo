var prenomRandom = ['Millian', 'Priscilla', 'Orso', 'Blanca', 'Amadeo', 'Myra', 'James', 'Floriane', 'Remy', 'Marlene', 'Jerry', 'Milene', 'Baudoin', 'Mirella', 'Remy', 'Zea', 'Orlando', 'Tessie', 'Philippe', 'Viviane', 'Ferreol', 'Eliane', 'Remy', 'Janna', 'Jerry', 'Fabienne', 'Morgan', 'Gianna', 'Stan', 'Tiffanie', 'Enguerrand', 'Tamara', 'Janis', 'Mireille', 'Fabien', 'Magaly', 'Jeremy', 'Theo', 'Melina', 'Emma', 'Morgan', 'Valentin', 'Amandine', 'Mathilde', 'Thibault', 'Matteo', 'Carla', 'Louise'];

var Loterie = {
	participant: [{
		prenom: 'Amadeo',
		numero: 17
	}, {
		prenom: 'Tiffanie',
		numero: 8
	}, {
		prenom: 'Janis',
		numero: 67
	}],
	numeros: [
		[12, 78, 35, 8, 98, 67, 31, 16, 86, 24],
		[64, 45, 3, 97, 20, 5, 41, 16, 8, 87]
	]
}

// Renvoi un nombre aléatoire entre min et max
function aleatoireEntre(min, max) {
	return Math.floor(Math.random() * max) + min;
}

// Fonction qui compte le nombre d'élément dans un tableau
function compterTableau(tableau) {
	var count = 0;
	for (var item of tableau) {
		count++;
	}
	return count;
}

// Fonction qui affiche toutes les grilles
function afficherGrilles() {
	for (var grille = 0; grille < compterTableau(Loterie['numeros']); grille++) {
		afficherNumero(grille);
	}	
}

// Fonction qui affiche une grille de numéro
function afficherNumero(grille) {
	var text = '';
	for (var item of Loterie['numeros'][grille]) {
		if (text != '') {
			text += ', ';
		}
		text += item;
	}
	console.log('Les numéros de la grille ' + (grille + 1) + ' sont : ' + text + '.');
}

// Fonction qui change les numéros d'une grille
function changerNumero(grille) {
	var newNum = [];
	for (var i = 0; i < 10; i++) {
		// Affecte un nombre entre 1 et 100
		newNum[i] = aleatoireEntre(1, 100);
	}
	Loterie['numeros'][grille] = newNum;
	afficherNumero(grille);
}

// Fonction qui cherche un numéro dans les numéros d'une grille
function trouverNumero(numero, grille) {
	for (var item of Loterie['numeros'][grille]) {
		if (numero == item) {
			return 1;
		}
	}
	return 0;
}

function afficherParticipant() {
	console.log('Les participants sont :');
	for (var item of Loterie['participant']) {
		console.log(item.prenom + ' : ' + item.numero);
	}
}

// fonction qui ajoute un participant
function ajouterParticipant() {
	var nextIndex = compterTableau(Loterie['participant']);
	var prenom = prenomRandom[aleatoireEntre(0, compterTableau(prenomRandom) - 1)];
	var numero = aleatoireEntre(1, 100);
	Loterie['participant'][nextIndex] = {
		prenom: prenom,
		numero: numero
	}
	afficherParticipant();
	afficherGagnant();
}

function afficherGagnant(grille = false) {
	if (grille !== false) {
		var text = '';
		for (var item of Loterie['participant']) {
			if (trouverNumero(item.numero, grille)) {
				if (text != '') {
					text += ', ';
				}
				text += item.prenom;
			}
		}
		if (text == '') {
			text = 'aucun';
		}
		console.log('Les gagnants de la grille ' + (grille + 1) + ' sont : ' + text);
	}
	else
	{	
		for (var grille = 0; grille < compterTableau(Loterie['numeros']); grille++) {
			var text = '';
			for (var item of Loterie['participant']) {
				if (trouverNumero(item.numero, grille)) {
					if (text != '') {
						text += ', ';
					}
					text += item.prenom;
				}
			}
			if (text == '') {
				text = 'aucun';
			}
			console.log('Les gagnants de la grille ' + (grille + 1) + ' sont : ' + text);
		}
	}
}

afficherParticipant();
afficherGrilles();
afficherGagnant();
changerNumero(0);
afficherGagnant(0);
ajouterParticipant();
changerNumero(1);
afficherGagnant(1);


/*
Récapitulatif :

Acceder à une key d'un objet :
objet.key
objet['key']

exemple :
var monObjet = {maClef : 'valeur'};

monObjet.maClef
monObjet['maClef']



Acceder à un élement d'un tableau à une dimension:
table[index]

exemple :
var monTableau = [1, 2, 3];

monTableau[0] -> 1
monTableau[1] -> 2
monTableau[2] -> 3

Acceder à un élement d'un tableau à plusieurs dimensions:
table[index][index]

_________
|   |   |
| A | B |
|___|___|
|   |   |
| C | D |
|___|___|
|   |   |
| E | F |
|___|___|

var monTableau = [
	['A', 'B'],
	['C', 'D'],
	['E', 'F'],
];

monTableau[0][0] -> A
monTableau[0][1] -> B
monTableau[1][0] -> C
monTableau[1][1] -> D
monTableau[2][0] -> E
monTableau[2][1] -> F

*/