
/*
var morpion = [
	['A', 'B', 'C'],
	['D', 'E', 'F'],
	['G', 'H', 'I']
];

_____________
|   |   |   |
| A | B | C |
|___|___|___|
|   |   |   |
| D | E | F |
|___|___|___|
|   |   |   |
| G | H | I |
|___|___|___|

console.log(morpion[0][0]);
// => A
console.log(morpion[1][2]);
// => F
console.log(morpion[2][2]);
// => I

// A
document.getElementById('morpion').children[0].children[0].innerHTML = 'A';
// F
document.getElementById('morpion').children[1].children[2].innerHTML = 'F';
// I
document.getElementById('morpion').children[2].children[2].innerHTML = 'I';
*/
var morpion = [[],[],[]];
var turn = 'X';
var win = false;
// Ne rien modifier au dessus de ce commentaire

// Fonction qui permet de jouer
// Ne pas modifier cette fonction
function play(x, y) {
	if (!morpion[y][x] && win === false) {
		morpion[y][x] = turn;
		document.getElementById('morpion').children[y].children[x].innerHTML = turn;
		if (turn == 'X') {
			turn = 'O';
			document.getElementById('infos').children[0].innerHTML = 'Au tour de O';
		}
		else {
			turn = 'X';
			document.getElementById('infos').children[0].innerHTML = 'Au tour de X';
		}
		is_win(x, y);
	}
}

// Fonction qui permet de recommencer
function restart() {
	morpion = [[],[],[]];
	turn = 'X';
	win = false;
	// Ne rien modifier au dessus de ce commentaire

	// Ne rien modifier au dessous de ce commentaire
	for (var y = 0; y <= 2; y++) {
		for (var x = 0; x <= 2; x++) {
			document.getElementById('morpion').children[y].children[x].innerHTML = '';
		}
	}
	document.getElementById('infos').children[0].innerHTML = 'Au tour de X';
}

// Fonction de vérification de victoire
function is_win(x, y) {
	// Ne rien modifier au dessus de ce commentaire
	var _A = morpion [0][0];
	var _B = morpion [0][1];
	var _C = morpion [0][2];
	var _D = morpion [1][0];
	var _E = morpion [1][1];
	var _F = morpion [1][2];
	var _G = morpion [2][0];
	var _H = morpion [2][1];
	var _I = morpion [2][2];


	if(_A == _B && _B == _C && _C != null)
	{
		win = _A;
	}
	else if (_A == _E && _E == _I && _I != null)
	{
		win = _A;
	}
	else if(_A == _D && _D == _G && _G != null)
	{
		win = _A;
	}
	else if(_B == _E && _E == _H && _H != null)
	{
		win = _B;
	}
	else if(_C == _F && _F == _I && _F != null )
	{
		win = _C;
	}
	else if(_D == _E && _E == _F && _D != null)
	{
		win = _D;
	}
	else if(_G == _H && _H == _I && _I != null )
	{
		win = _H;
	}
	else if(_G == _E && _E == _C && _E != null)
	{
		win = _E;
		// 	if (_E == 'X')
		// {
		// 	win = 'X';
		// }
		// else if (_E = 'O')
		// {
		// 	win = 'O';
		// }
	}
	else if(_A != null && _B != null && _C != null && _D != null
		&& _E != null && _F != null && _G != null && _H != null && _I != null
		){
			win = 'null';
		}
	// Ne rien modifier au dessous de ce commentaire
	if (win == 'null') {
		document.getElementById('infos').children[0].innerHTML = 'Match nul';
	}
	else if (win !== false) {
		document.getElementById('infos').children[0].innerHTML = win + ' à gagné';
	}
}

