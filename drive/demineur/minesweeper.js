var minesweeper = [[],[],[],[],[],[],[],[],[],[]];
var flags = [[],[],[],[],[],[],[],[],[],[]];
var conf = [16, 24, 36];
var flag = false;
var mines = -1;
var win = false;
var debug = false;

var comparaison = [[],[],[],[],[],[],[],[],[],[]];


// Méthode pour gerer les évènements clavier.
document.addEventListener('keydown', (event) => {
	if (event.keyCode == 70) {
		toggleFlag(event.keyCode);
	}
	if (event.keyCode == 68) {
		toggleDebug(event.keyCode);
	}
});
// Ne rien modifier au dessus de ce commentaire

// Fonction pour créer automatiquement les mines sur une nouvelle grille
// Ne pas modifier cette fonction
function setGrille(difficulty) {
	restart()
	mines = 0;
	for (var x = 0; x < 16; x++) {
		for (var y = 0; y < 10; y++) {
			var random = Math.floor(Math.random() * 101);
			if (random <= conf[difficulty]) {
				minesweeper[y][x] = 'M';
				if (debug == true) {
					document.getElementById('minesweeper').children[y].children[x].children[0].classList.add('mine');
				}
				mines++;
			}
		}
	}
	document.getElementById('infos').children[0].innerHTML = 'Il reste ' + mines + ' mine' + (mines > 1 ? 's' : '');
}

// Fonction pour vérifier si les drapeaux ont été posés corretement
// Ne pas modifier cette fonction
function verify() {
	for (var x = 0; x < 16; x++) {
		for (var y = 0; y < 10; y++) {
			if (flags[y][x] == 1 && minesweeper[y][x] != 'M') {
				document.getElementById('minesweeper').children[y].children[x].children[0].classList.remove('flag');
				if (minesweeper[y][x] != 'E' && minesweeper[y][x] != undefined) {
					document.getElementById('minesweeper').children[y].children[x].children[0].classList.add('m' + minesweeper[y][x]);
					document.getElementById('minesweeper').children[y].children[x].children[0].innerHTML = minesweeper[y][x];
				}
				document.getElementById('minesweeper').children[y].children[x].classList.add('explose');
			} else if (minesweeper[y][x] == 'M') {
				document.getElementById('minesweeper').children[y].children[x].children[0].classList.add('mine');
			}
		}
	}
	completerGrille();
}

// Fonction pour dessiner automatiquement la grille
// Ne pas modifier cette fonction
function dessinerGrille() {
	for (var x = 0; x < 16; x++) {
		for (var y = 0; y < 10; y++) {
			if (win == false) {
				document.getElementById('minesweeper').children[y].children[x].classList.add('clicked');
			}
			if (minesweeper[y][x] == 'M') {
				document.getElementById('minesweeper').children[y].children[x].children[0].classList.add('mine');
			} else if (minesweeper[y][x] != 'E' && minesweeper[y][x] != undefined) {
				document.getElementById('minesweeper').children[y].children[x].children[0].classList.add('m' + minesweeper[y][x]);
				document.getElementById('minesweeper').children[y].children[x].children[0].innerHTML = minesweeper[y][x];
			}
		}
	}
	if (win == false) {
		win = true;
		is_win();
	}
}

// Fonction action/désactivation du mode Debug
// Ne pas modifier cette fonction
function toggleDebug(event) {
	if (debug == true) {
		debug = false;
		document.getElementById('cogs').children[0].classList.remove('toggleOn');
		document.getElementById('cogs').children[0].classList.add('toggleOff');
		if (win == false) {
			var items = document.querySelectorAll('.mine');
			for (let item of items) {
				item.classList.remove('mine');
			}
		}
	} else {
		debug = true;
		document.getElementById('cogs').children[0].classList.remove('toggleOff');
		document.getElementById('cogs').children[0].classList.add('toggleOn');
		for (var x = 0; x < 16; x++) {
			for (var y = 0; y < 10; y++) {
				if (minesweeper[y][x] == 'M') {
					document.getElementById('minesweeper').children[y].children[x].children[0].classList.add('mine');
				}
			}
		}
	}
}

// Fonction action/désactivation du mode Drapeau
// Ne pas modifier cette fonction
function toggleFlag(event) {
	if (flag == true) {
		flag = false;
		document.getElementById('flag').children[0].classList.remove('toggleOn');
		document.getElementById('flag').children[0].classList.add('toggleOff');
	} else {
		flag = true;
		document.getElementById('flag').children[0].classList.remove('toggleOff');
		document.getElementById('flag').children[0].classList.add('toggleOn');
	}
}

// Fonction pour recommencer
// Ne pas modifier cette fonction
function restart() {
	minesweeper = [[],[],[],[],[],[],[],[],[],[]];
	flags = [[],[],[],[],[],[],[],[],[],[]];
	mines = -1;
	win = false;
	for (var x = 0; x < 16; x++) {
		for (var y = 0; y < 10; y++) {
			document.getElementById('minesweeper').children[y].children[x].classList.remove('clicked');
			document.getElementById('minesweeper').children[y].children[x].classList.remove('explose');
			document.getElementById('minesweeper').children[y].children[x].children[0].classList.remove('mine');
			document.getElementById('minesweeper').children[y].children[x].children[0].classList.remove('flag');
			document.getElementById('minesweeper').children[y].children[x].children[0].classList.remove('m1');
			document.getElementById('minesweeper').children[y].children[x].children[0].classList.remove('m2');
			document.getElementById('minesweeper').children[y].children[x].children[0].classList.remove('m3');
			document.getElementById('minesweeper').children[y].children[x].children[0].classList.remove('m4');
			document.getElementById('minesweeper').children[y].children[x].children[0].classList.remove('m5');
			document.getElementById('minesweeper').children[y].children[x].children[0].classList.remove('m6');
			document.getElementById('minesweeper').children[y].children[x].children[0].classList.remove('m7');
			document.getElementById('minesweeper').children[y].children[x].children[0].classList.remove('m8');
			document.getElementById('minesweeper').children[y].children[x].children[0].innerHTML = '';
		}
	}
	document.getElementById('infos').children[0].innerHTML = '';
}

// Fonction pour dessiner une mine qui a explosée si on clique sur une mine
// Ne pas modifier cette fonction
function dessinerMineExplose(x, y) {
	document.getElementById('minesweeper').children[y].children[x].children[0].classList.add('mine');
	document.getElementById('minesweeper').children[y].children[x].classList.remove('clicked');
	document.getElementById('minesweeper').children[y].children[x].classList.add('explose');
	document.getElementById('infos').children[0].innerHTML = 'BOOM !!!';
	win = 'mine';
}

// Fonction pour dessiner un drapeau si on clique sur une case
// Ne pas modifier cette fonction
function dessinerFlag(x, y, toggle) {
	if (toggle == 1) {
		document.getElementById('minesweeper').children[y].children[x].children[0].classList.add('flag');
	} else {
		document.getElementById('minesweeper').children[y].children[x].children[0].classList.remove('flag');
	}
}

// Fonction pour dessiner une case vide si on clique sur une case vide
// Ne pas modifier cette fonction
function dessinerCaseVide(x, y) {
	document.getElementById('minesweeper').children[y].children[x].classList.add('clicked');
}

// Fonction pour dessiner le nombre de mine si on clique sur une case qui a des mines autour d'elle
// Ne pas modifier cette fonction
function dessinerNbMine(x, y) {
	document.getElementById('minesweeper').children[y].children[x].classList.add('clicked');
	document.getElementById('minesweeper').children[y].children[x].children[0].classList.add('m' + minesweeper[y][x]);
	document.getElementById('minesweeper').children[y].children[x].children[0].innerHTML = minesweeper[y][x];
}

// Fonction pour jouer
function play(x, y) {
	if (mines >= 0 && win === false) {
		if (flag == true) {
			if (flags[y][x] == 1) {
				flags[y][x] = 0;
				dessinerFlag(x, y, 0);
				mines++;
				document.getElementById('infos').children[0].innerHTML = 'Il reste ' + mines + ' mine' + (mines > 1 ? 's' : '');
			} else if (minesweeper[y][x] === undefined || minesweeper[y][x] == 'M') {
				flags[y][x] = 1;
				dessinerFlag(x, y, 1);
				mines--;
				document.getElementById('infos').children[0].innerHTML = 'Il reste ' + mines + ' mine' + (mines > 1 ? 's' : '');
			}
		}
		else if (minesweeper[y][x] == 'M' && flags[y][x] != 1) {
			dessinerMineExplose(x, y);
		}
		else {
			if (flags[y][x] == 1) {
				if (win !== false) {
					flags[y][x] = 0;
					dessinerFlag(x, y, 0);
					mines++;
					document.getElementById('infos').children[0].innerHTML = 'Il reste ' + mines + ' mine' + (mines > 1 ? 's' : '');
				}
			}
			else {
				// Ne rien modifier au dessus de ce commentaire
				
				// on veut que lorsqu'on clique sur la case soit:
				// - ca dessine le numéro mais limité à un clic
				// - ca dessine la case vide
				if(minesweeper[y][x] == undefined || minesweeper[y][x] == "M" || minesweeper[y][x] == "E")
				{
					comparaison[y][x] = 1;
					ouloulou_je_dessine_la_grille(y,x);
				}
				
				
				dessinerCaseVide(x,y);
				if(minesweeper[y][x] != "E"){
					dessinerNbMine(x,y);
				}
				console.log(minesweeper);

			}
			// Ne rien modifier au dessous de ce commentaire
		}
		is_win();
	}
}

// Fonction pour completer automatiquement la grille
function completerGrille()
{
	// Ne rien modifier au dessus de ce commentaire
	

	// Grille 16x10
	// Tableau à double dimension minesweeper[y][x]
	

	for(var ligne = 0; ligne <= 9; ligne++) // On parcours minesweeper[y] 
	// <= ici i sera le curseur de y
	{
		//compter_mines();
		/* Pour ensuite parcourir minesweeper[i][x]; 
		ici on utilise pas dans la condition minesweeper[i].
		length car elle stoppera lorsqu'elle rencontrera une mine. 
		Alors on sait qu'il y a 15 champs donc on met directement 15
		 */
		for(var col = 0; col <= 15; col++)
		{ 
		//minesweeper[ligne][col];
		ouloulou_je_dessine_la_grille(ligne, col);
		compter = 0;
		}
	}
	// Ne rien modifier au dessous de ce commentaire
	dessinerGrille();
}

function ouloulou_je_dessine_la_grille(ligne, col){

	if(minesweeper[ligne][col] != undefined && minesweeper[ligne][col] != "M" 
	&& minesweeper[ligne][col] != "E" ) {
		minesweeper[ligne][col] = 0;
	}
	if(minesweeper[ligne][col] != 'M')
	{	
		// Attribution de la variable compter
		if(minesweeper[ligne][col] === undefined){
			var compter = 0;
			minesweeper[ligne][col] = "E";
		}else {
			var compter = minesweeper[ligne][col];
		}

		if(ligne > 0 && ligne < 9 && col > 0 && col < 15)
		{
			console.log("en dehors des bordures", "col", col, "ligne", ligne);
			if(minesweeper[ligne-1][col-1] == 'M')
			{
			compter = compter + 1;
			minesweeper[ligne][col] = compter;
			}
			if(minesweeper[ligne-1][col] == 'M')
			{
			compter = compter+1;
			minesweeper[ligne][col] = compter;
			}
			if(minesweeper[ligne-1][col+1] == 'M')
			{
			compter = compter+1;
			minesweeper[ligne][col] = compter;
			}
			if(minesweeper[ligne][col+1] == 'M')
			{
			compter = compter+1;
			minesweeper[ligne][col] = compter;
			}
			if(minesweeper[ligne+1][col+1] == 'M')
			{
			compter = compter+1;
			minesweeper[ligne][col] = compter;
			}
			if(minesweeper[ligne+1][col] == 'M')
			{
			compter = compter+1;
			minesweeper[ligne][col] = compter;
			}
			if(minesweeper[ligne+1][col-1] == 'M')
			{
			compter = compter+1;
			minesweeper[ligne][col] = compter;
			}
			if(minesweeper[ligne][col-1] == 'M')
			{
			compter = compter+1;
			minesweeper[ligne][col] = compter;
			}
		}else {
			if(ligne == 0 && col == 0){ // ligne 0

					if(minesweeper[ligne+1][col+1] == 'M')
					{
					compter = compter+1;
					minesweeper[ligne][col] = compter;
					}
					if(minesweeper[ligne][col+1] == 'M')
					{
					compter = compter+1;
					minesweeper[ligne][col] = compter;
					}

					if(minesweeper[ligne+1][col] == 'M')
					{
					compter = compter+1;
					minesweeper[ligne][col] = compter;
					}
				}else if(ligne == 0 && col == 15) { // Angle droit
					if(minesweeper[ligne][col-1] == 'M')
					{
					compter = compter+1;
					minesweeper[ligne][col] = compter;
					}
					if(minesweeper[ligne+1][col-1] == 'M')
					{
					compter = compter+1;
					minesweeper[ligne][col] = compter;
					}
					if(minesweeper[ligne+1][col] == 'M')
					{
					compter = compter+1;
					minesweeper[ligne][col] = compter;
					}
				}else if(ligne == 9 && col == 0){ // ligne 9
					if(minesweeper[ligne-1][col] == 'M')
					{
					compter = compter+1;
					minesweeper[ligne][col] = compter;
					}
					if(minesweeper[ligne-1][col+1] == 'M')
					{
					compter = compter+1;
					minesweeper[ligne][col] = compter;
					}
					if(minesweeper[ligne][col+1] == 'M')
					{
					compter = compter+1;
					minesweeper[ligne][col] = compter;
					}
				}else if(ligne == 9 && col == 15) // Angle droit
				{
					if(minesweeper[ligne-1][col] == 'M')
					{
					compter = compter+1;
					minesweeper[ligne][col] = compter;
					}
					if(minesweeper[ligne-1][col-1] == 'M')
					{
					compter = compter + 1;
					minesweeper[ligne][col] = compter;
					}

					if(minesweeper[ligne][col-1] == 'M')
					{
					compter = compter+1;
					minesweeper[ligne][col] = compter;
					}
				}else if(ligne == 0 && col > 0 && col < 15){ // haut
					if(minesweeper[ligne][col-1] == 'M')
					{
					compter = compter+1;
					minesweeper[ligne][col] = compter;
					}

					if(minesweeper[ligne+1][col-1] == 'M')
					{
					compter = compter+1;
					minesweeper[ligne][col] = compter;
					}

					if(minesweeper[ligne+1][col] == 'M')
					{
					compter = compter+1;
					minesweeper[ligne][col] = compter;
					}

					if(minesweeper[ligne+1][col+1] == 'M')
					{
					compter = compter+1;
					minesweeper[ligne][col] = compter;
					}

					if(minesweeper[ligne][col+1] == 'M')
					{
					compter = compter+1;
					minesweeper[ligne][col] = compter;
					}
				}else if(ligne == 9 && col > 0 && col < 15){ // bas
					if(minesweeper[ligne][col-1] == 'M')
					{
					compter = compter+1;
					minesweeper[ligne][col] = compter;
					}

					if(minesweeper[ligne-1][col-1] == 'M')
					{
					compter = compter + 1;
					minesweeper[ligne][col] = compter;
					}

					if(minesweeper[ligne-1][col] == 'M')
					{
					compter = compter+1;
					minesweeper[ligne][col] = compter;
					}

					if(minesweeper[ligne-1][col+1] == 'M')
					{
					compter = compter+1;
					minesweeper[ligne][col] = compter;
					}


					if(minesweeper[ligne][col+1] == 'M')
					{
					compter = compter+1;
					minesweeper[ligne][col] = compter;
					}

				}else if(col == 0 && ligne > 0 && ligne < 9){ // col gauche
					if(minesweeper[ligne-1][col] == 'M')
					{
					compter = compter+1;
					minesweeper[ligne][col] = compter;
					}

					if(minesweeper[ligne-1][col+1] == 'M')
					{
					compter = compter+1;
					minesweeper[ligne][col] = compter;
					}

					if(minesweeper[ligne][col+1] == 'M')
					{
					compter = compter+1;
					minesweeper[ligne][col] = compter;
					}

					if(minesweeper[ligne+1][col+1] == 'M')
					{
					compter = compter+1;
					minesweeper[ligne][col] = compter;
					}

					if(minesweeper[ligne+1][col] == 'M')
					{
					compter = compter+1;
					minesweeper[ligne][col] = compter;
					}

				}else if(col==15 && ligne > 0 && ligne < 9){ // col droite

					if(minesweeper[ligne-1][col] == 'M')
					{
					compter = compter+1;
					minesweeper[ligne][col] = compter;
					}

					if(minesweeper[ligne-1][col-1] == 'M')
					{
					compter = compter+1;
					minesweeper[ligne][col] = compter;
					}

					if(minesweeper[ligne][col-1] == 'M')
					{
					compter = compter+1;
					minesweeper[ligne][col] = compter;
					}

					if(minesweeper[ligne+1][col-1] == 'M')
					{
					compter = compter+1;
					minesweeper[ligne][col] = compter;
					}

					if(minesweeper[ligne+1][col] == 'M')
					{
					compter = compter+1;
					minesweeper[ligne][col] = compter;
					}
				}
			}
		}
}	

var une_verification_a_faire = 0;
var compteur_pour_gagner_la_partie = 0;


// Fonction de vérification de victoire
function is_win() {
	compteur_pour_gagner_la_partie++;
	// Ne rien modifier au dessus de ce commentaire	
	// Pour que la condiion de victoire soit rempli il faut que le nbr total de case - nbr de mine soit différent de undefined
	console.log(comparaison);
	console.log("je passe une fois");
	for(var ligne = 0; ligne <= 9; ligne++)
	{
		console.log("première boucle, je passe une fois");
		for(var col=0; col <= 0; col++){
			console.log("deuxième boucle, je passe une fois");
			if(minesweeper[ligne][col] != "M" && comparaison[ligne][col] == 1){
				compteur_pour_gagner_la_partie = compteur_pour_gagner_la_partie -1;
			}
		}
	}

	if(compteur_pour_gagner_la_partie - mines == 0)
	{
		win = true;
	}
	
	console.log(compteur_pour_gagner_la_partie);
	
	// Ne rien modifier au dessous de ce commentaire
	if (win == 'mine') {
		verify();
	}
	else if (win !== false && win != 'mine') {
		document.getElementById('infos').children[0].innerHTML = 'Partie gagnée';
	}
}

