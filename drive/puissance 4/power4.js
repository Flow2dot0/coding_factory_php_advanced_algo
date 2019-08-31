
/*
var power4 = [
	[1, 2, 3, 4, 5, 6, 7],
	[8, 9, 10, 11, 12, 13, 14],
	[15, 16, 17, 18, 19, 20, 21],
	[22, 23, 24, 25, 26, 27, 28],
	[29, 30, 31, 32, 33, 34, 35],
	[36, 37, 38, 39, 40, 41, 42]
];

____________________________________
|    |    |    |    |    |    |    |
|  1 |  2 |  3 |  4 |  5 |  6 |  7 |
|____|____|____|____|____|____|____|
|    |    |    |    |    |    |    |
|  8 |  9 | 10 | 11 | 12 | 13 | 14 |
|____|____|____|____|____|____|____|
|    |    |    |    |    |    |    |
| 15 | 16 | 17 | 18 | 19 | 20 | 21 |
|____|____|____|____|____|____|____|
|    |    |    |    |    |    |    |
| 22 | 23 | 24 | 25 | 26 | 27 | 28 |
|____|____|____|____|____|____|____|
|    |    |    |    |    |    |    |
| 29 | 30 | 31 | 32 | 33 | 34 | 35 |
|____|____|____|____|____|____|____|
|    |    |    |    |    |    |    |
| 36 | 37 | 38 | 39 | 40 | 41 | 42 |
|____|____|____|____|____|____|____|

Y étant l'ordonné
X étant l'abscisse

power4[i+1][y+1]

var if_win = 0;
for(var t = x; t < x+3 ; t++){
	if(power4[t][y] == "jaune") {
		if_win++;
	}
}

if(if_win == 3)  { gg }

for(var y = 0; y < 42; y++)
{
	for(var x = 0; x <)
}

console.log(power4[0][0]);
// => 1
console.log(power4[5][6]);
// => 42

// 1
document.getElementById('power4').children[0].children[0].innerHTML = 1;
// 42
document.getElementById('power4').children[5].children[6].innerHTML = 42;
*/
var power4 = [[],[],[],[],[],[]];
var gravity = [5,5,5,5,5,5,5];
var turn = 'J';
var anim = false;
var win = false;
// Méthode pour gerer les évènements clavier.
document.addEventListener('keydown', (event) => {
	if (event.keyCode == 65) {
		toggleAnim(event.keyCode);
	}
});
// Ne rien modifier au dessus de ce commentaire

var count = 0;

// Fonction qui permet l'animation des jetons
// Ne pas modifier cette fonction
function gravity_anim (gravity, x, gravity_max, turn) {
	setTimeout((function(gravity, x, gravity_max, turn) {
		return function() {
			if (gravity_max == 0) {
				document.getElementById('power4').children[gravity].children[x].children[0].classList.add(turn == 'J' ? 'yellow' : 'red');
			}
			else {
				if (gravity > 0) {
					document.getElementById('power4').children[gravity - 1].children[x].children[0].classList.remove(turn == 'J' ? 'yellow' : 'red');
				}
				document.getElementById('power4').children[gravity].children[x].children[0].classList.add(turn == 'J' ? 'yellow' : 'red');
			}
			if (gravity < gravity_max) {
				gravity_anim ((gravity + 1), x, gravity_max, turn);
			}
		};
	}) (gravity, x, gravity_max, turn), 50);
}

// Fonction action/désactivation du mode Animation
// Ne pas modifier cette fonction
function toggleAnim(event) {
	if (anim == true) {
		anim = false;
		document.getElementById('anim').children[0].classList.remove('toggleOn');
		document.getElementById('anim').children[0].classList.add('toggleOff');
	} else {
		anim = true;
		document.getElementById('anim').children[0].classList.remove('toggleOff');
		document.getElementById('anim').children[0].classList.add('toggleOn');
	}
}

// Fonction qui permet de jouer
// Ne pas modifier cette fonction
function play(x) {
	if (gravity[x] >= 0 && win === false) {
		power4[gravity[x]][x] = turn;

		if (anim == true) {
			gravity_anim (0, x, gravity[x], turn);
		} else {
			document.getElementById('power4').children[gravity[x]].children[x].children[0].classList.add(turn == 'J' ? 'yellow' : 'red');
		}

		if (turn == 'J') {
			turn = 'R';
			document.getElementById('infos').children[0].innerHTML = 'Au tour de Rouge';
		}
		else {
			turn = 'J';
			document.getElementById('infos').children[0].innerHTML = 'Au tour de Jaune';
		}
		is_win(x, gravity[x]);
		gravity[x]--;
		// Ne rien modifier au dessus de ce commentaire
		// Ne rien modifier au dessous de ce commentaire
	}
}

// Fonction pour remplir automatiquement la grille
// Ne pas modifier cette fonction
function autoFill() {
	restart();
	for (var y = 0; y <= 5; y++) {
		for (var x = 0; x <= 6; x++) {
				if (gravity[x] >= 0 && win === false) {
				power4[gravity[x]][x] = turn;
				document.getElementById('power4').children[gravity[x]].children[x].children[0].classList.add(turn == 'J' ? 'yellow' : 'red');
				var random = Math.floor(Math.random() * 2);
				if (random == 1) {
					turn = 'R';
					document.getElementById('infos').children[0].innerHTML = 'Au tour de Rouge';
				}
				else {
					turn = 'J';
					document.getElementById('infos').children[0].innerHTML = 'Au tour de Jaune';
				}
				is_win(x, gravity[x]);
				gravity[x]--;
			}
		}
	}
}

// Fonction qui permet de recommencer
function restart() {
	power4 = [[],[],[],[],[],[]];
	gravity = [5,5,5,5,5,5,5];
	turn = 'J';
	win = false;
	// Ne rien modifier au dessus de ce commentaire

	// Ne rien modifier au dessous de ce commentaire
	for (var y = 0; y <= 5; y++) {
		for (var x = 0; x <= 6; x++) {
			document.getElementById('power4').children[y].children[x].children[0].classList.remove('yellow');
			document.getElementById('power4').children[y].children[x].children[0].classList.remove('red');
		}
	}
	document.getElementById('infos').children[0].innerHTML = 'Au tour de Jaune';
}
function check_line(x,y){
	
	var trouves = 1;
	var pion = power4[y][x];
	for(var i = x - 1; i >= x-3; i--){
		if(i >= 0) {
			if(power4[y][i] == pion) {
				trouves++;
			}else if(power4[y][i] != pion) {
				break;
			}	
		}
	}
	for(var i = x + 1; i <= x+3; i++){
		if(i <= 6) {
			if(power4[y][i] == pion) {
				trouves++;
			}else if(power4[y][i] != pion) {
				break;
			}	
		}
	}
	console.log("ligne: ", trouves);
	return trouves;
}
function check_column(x,y){
	var trouves = 1;
	var pion = power4[y][x];
	for(var i = y - 1; i >= y-3; i--){
		if(i >= 0) {
			if(power4[i][x] == pion) {
				trouves++;
			}else if(power4[i][x] != pion) {
				break;
			}	
		}
	}
	for(var i = y + 1; i <= y+3; i++){
		if(i < 6) {
			if(power4[i][x] == pion) {
				trouves++;
			}else if(power4[i][x] != pion) {
				break;
			}	
		}
	}
	console.log("colonne: ", trouves);
	return trouves;
}

function check_diag_right(x,y){
	var trouves = 1;
	var pion = power4[y][x];

	for(var i = 1; i <= 3; i++){
		if(y+i < 6 && x+i < 7) {
			if(power4[y+i][x+i] == pion) {
				trouves++;
			}
			else if(power4[y+i][x+i] != pion ){
				break;
			}	
		}
	}

	for(var i = 1; i <= 3; i++){
		if(y-i >= 0 && x-i >= 0) {
			if(power4[y-i][x-i] == pion) {
				trouves++;
			}
			else if(power4[y-i][x-i] != pion ){
				break;
			}	
		}
	}
	console.log("diagonal: ", trouves);
	return trouves;
}
	////// DE GAUCHE VERS LA DROITE
function check_diag_left(x,y){
	var trouves = 1;
	var pion = power4[y][x];

	for(var i = 1; i <= 3; i++){
		if(y+i < 6 && x-i < 7) {
			if(power4[y+i][x-i] == pion) {
				trouves++;
			}
			else if(power4[y+i][x-i] != pion ){
				break;
			}	
		}
	}

	for(var i = 1; i <= 3; i++){
		if(y-i >= 0 && x+i >= 0) {
			if(power4[y-i][x+i] == pion) {
				trouves++;
			}
			else if(power4[y-i][x+i] != pion ){
				break;
			}	
		}
	}
	console.log("diagonal: ", trouves);
	return trouves;
}

	


// Fonction de vérification de victoire
function is_win(x, y) {
	// Ne rien modifier au dessus de ce commentaire
	
	var text = '';
	if(power4[y][x] == "J"){
		text = "Jaune";
	}else {
		text = "Rouge";
	}
	
	if ( check_line(x,y) >= 4)
	{
		win = text; 
	}
	else if (check_column(x,y) >= 4)
	{
		win = text; 
	}
	else if (check_diag_left(x,y) == 4 || check_diag_right(x,y) == 4)
	{
		console.log('here');
		win = text; 
	}
	count++;

	if(count == 42
		&& check_diag(x,y) != 4 ){
		win = 'null';
	}

	console.log(count);
	// Ne rien modifier au dessous de ce commentaire
	if (win == 'null') {
		document.getElementById('infos').children[0].innerHTML = 'Match nul';
	}
	else if (win !== false) {
		document.getElementById('infos').children[0].innerHTML = win + ' à gagné';
	}
}

