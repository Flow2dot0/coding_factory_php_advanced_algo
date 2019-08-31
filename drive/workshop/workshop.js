/*
	Déclaration de variable (Page 7)
*/

var maVariable = 42;
console.log('Déclaration de maVariable :', maVariable);

maVariable = 100;
console.log('Modification de maVariable :', maVariable);

var maVariable2 = 21;
console.log('Déclaration de maVariable2 :', maVariable2);

var maVariable3 = maVariable + maVariable2;
console.log('Déclaration de maVariable3 :', maVariable3);

var maVariable4 = 'additionner maVariable et maVariable2 est égal à ' + maVariable3;
console.log('Déclaration de maVariable4 :', maVariable4);

var maVariable5 = ['Hello', 'world !'];
console.log('Déclaration de maVariable5 :', maVariable5);

var maVariable6 = {ville: 'Paris', departement: 75};
console.log('Déclaration de maVariable6 :', maVariable6);

/*
	Opérateurs d'affectation (Page 8)
*/

var maVariable = 42;
console.log('Affectation :', maVariable);

maVariable += 100;
console.log('Affectation après addition :', maVariable);

maVariable -= 42;
console.log('Affectation après soustraction :', maVariable);

maVariable *= 2;
console.log('Affectation après multiplication :', maVariable);

maVariable /= 10;
console.log('Affectation après division :', maVariable);

maVariable %= 18;
console.log('Affectation du reste:', maVariable);

maVariable **= 2;
console.log('Affectation après exponentiation:', maVariable);

/*
	Opérateurs arithmétiques (Page 9)
*/

var maVariable = 42;
console.log('Affectation :', maVariable);

maVariable++;
console.log('Incrémentation :', maVariable);

maVariable--;
console.log('Décrémentation :', maVariable);

maVariable = -maVariable;
console.log('Négation unaire :', maVariable);

maVariable = -maVariable;
console.log('Négation unaire :', maVariable);

maVariable = maVariable % 5;
console.log('Reste :', maVariable);

maVariable = maVariable ** 2;
console.log('Opérateur d\'exponentiation :', maVariable);

/*
	Les condition (Page 13 à 14)
*/

var age = 42;
if (age >= 18) {
	console.log('if...else :', 'Cette personne est majeure');
}
else {
	console.log('if...else :', 'Cette personne est mineure');
}

var date = 'demain';
if (date == 'hier') {
	console.log('else if :', 'On est dans le passé');
}
else if (date == 'maintenant') {
	console.log('else if :', 'On est dans le présent');
}
else {
	console.log('else if :', 'On est dans le futur');
}

/*
	Les boucles (Page 15 à 19)
*/

var seconde = 0;
while (seconde < 60) {
	seconde++;
}
console.log('while :', seconde);

var text = '';
for (var seconde = 0; seconde < 60; seconde++) {
	text += ' ' + seconde;
}
console.log('for :', text);

var tableau = ['Hello', 'world'];
for (var item of tableau) {
	console.log('for...of tableau :', item);
}

var objet = {ville: 'Paris', departement: 75};
for (var key of Object.keys(objet)) {
	console.log('for...of objet :', key + ' > ' + objet[key]);
}

var chaine = 'Hello';
for (var item of chaine) {
	console.log('for...of chaine :', item);
}


/*
	Les fonction (Page 20)
*/

function addition(param1, param2) {
	return param1 + param2;
}
console.log('fonction :', addition(40, 2));