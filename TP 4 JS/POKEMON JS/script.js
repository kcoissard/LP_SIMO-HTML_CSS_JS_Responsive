//CREATION DES OBJETS "POKEMON"
	function Pokemon(nom, pathImg, numero, pathImgType1, pathImgType2, description, pathGenre, evoFirst, evoSecond, evoThird) {
	    this.nom = nom;
	    this.pathImg = pathImg;
	    this.numero = numero;
	    this.pathImgType1 = pathImgType1;
	    this.pathImgType2 = pathImgType2;
	    this.description = description;
	    this.pathGenre = pathGenre;
	    this.evoFirst = evoFirst;
	    this.evoSecond = evoSecond;
	    this.evoThird = evoThird;
	}



//CREATION ET REMPLISSAGE DE LA LISTE DE POKEMON
var listPokemon = new Array ();

listPokemon[0] = new Pokemon("Ptitard", "images/ptitard.png", "60",
	 "images/eau_logo.png", "", "Tout ce que l'on sait, c'est qu'il est mignon.", "images/logo_male.png", "Ptitard", "Tetard", "Tartard");

listPokemon[1] = new Pokemon("Lokhlass", "images/lokhlass2.png", "131",
	 "images/eau_logo.png", "images/glace_logo.png", "Parcequ'il est meilleur que Dracolosse !", "images/logo_femelle.png", "Lokhlass", "", "");

listPokemon[2] = new Pokemon("Staross", "images/staross3.png", "121",
	 "images/eau_logo.png", "", "Parcequ'il a des jolies couleurs.", "images/logo_femelle.png", "Stari", "Staross");

listPokemon[3] = new Pokemon("Lamantine", "images/lamantine.png", "87",
 "images/eau_logo.png", "images/glace_logo.png", "Parceque c'est une licorne des mers.");

listPokemon[4] = new Pokemon("Artikodin", "images/artikodin.png", "144",
	 "images/air_logo.png", "images/glace_logo.png", "Parceque sans lui ça va être difficile de battre Peter le maître de la ligue.");

listPokemon[5] = new Pokemon("Krabboss", "images/krabboss3.png", "99",
	 "images/eau_logo.png", "", "Parcequ'un crabe avec ultralaser, ça n'a pas de prix.");
	
	

//TROUVER UN POKEMON PAR SON NOM
function getPokemonByName(nom)
{
	var compteur;
	var nomPoke;

	for (compteur = 0; compteur < listPokemon.length; compteur++)
	{
		nomPoke = listPokemon[compteur]['nom'].toLowerCase();

		console.log("this.nom : "+nom+" --- nomPoke : "+nomPoke);
		if(nom==nomPoke)
		{
			//retourn l'objet pokemon
			return listPokemon[compteur];
		}
		console.log("pokemon non trouvé");
			return -1;
	}
}


//TEST ELEMENT CONTIENT UNE CLASSE
function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}


//ACTIVATION/DESACTIVATION DES DISPLAY NONE
document.addEventListener("click", function(event){
    var targetPokemon = event.target || event.srcElement;
    var idTargetPokemon = targetPokemon.id;
    idTargetPokemon=idTargetPokemon.toLowerCase();//tout en minuscule

    //var test;

    //div tableau ou detail a activer/desactiver au clique
    var tabDisplay = document.getElementById("pageContent");
    var detailDisplay = document.getElementById("detailPokemon");



    if(hasClass(targetPokemon, "declencheur")==true && hasClass(targetPokemon, "inactive")==false)
    {
    	tabDisplay.className += " inactive";
    	//detailDisplay.className = detailDisplay.className.classList.remove("inactive");
    }
    else if(hasClass(targetPokemon, "declencheur")==true && hasClass(targetPokemon, "inactive")==true)
    {
    	tabDisplay.className = tabDisplay.className.classList.remove("inactive");
    	//detailDisplay.className += " inactive";
    }

    //a bouger apres
    detailPokemon(idTargetPokemon);
    //console.log("id : "+idTargetPokemon+" ---- test : ");
});


//AFFICHAGE DU DETAIL POKEMON
function detailPokemon(pokemon)
{
	//console.log("getPokemonByName lancée --- pokemon"+pokemon+" --- this.pokemon "+this.pokemon);
	var pokemonEnDetail = getPokemonByName(pokemon);

	//on cible la div menu, on créé la liste et elle devient l'enfant de la liste
	var divDetailPokemon=document.getElementById("detailPokemon");


	//console.log("test objet -"+pokemonEnDetail['nom']);
}




//MISE EN PLACE DU MENU + contenu
function menuTop()
{
	//on cible la div menu, on créé la liste et elle devient l'enfant de la liste
	var divMenu=document.getElementById("menu");
	var listmenu = document.createElement("ul");
	listmenu.id += "listmenu";
	divMenu.appendChild(listmenu); 

	//////////////menu 1 li
	//création de li, li devient enfant de ul (listmenu)
	var menu_li_1 = document.createElement("li");
	menu_li_1.innerHTML = "<a href='index.html'>Accueil</a>";
	listmenu.appendChild(menu_li_1); 

	//création du 2ème ul qui devient enfant de li
	var menu_li_1_ul = document.createElement("ul");
	menu_li_1.appendChild(menu_li_1_ul); 

	//Remplissage du premier menu
	var menu_li_1_ul_li1 = document.createElement("li");
	menu_li_1_ul_li1.innerHTML = "<a href='index.html'>Accueil</a>";
	menu_li_1_ul.appendChild(menu_li_1_ul_li1);

	var menu_li_1_ul_li2 = document.createElement("li");
	menu_li_1_ul_li2.innerHTML = "<a href='index.html#ancre_tableau'>DreamTeam</a>";
	menu_li_1_ul.appendChild(menu_li_1_ul_li2);

	//////////////menu 2 li
	//création de li, li devient enfant de ul (listmenu)
	var menu_li_2 = document.createElement("li");
	menu_li_2.innerHTML = "<a>Pokemon</a>";
	listmenu.appendChild(menu_li_2); 

	//création du 2ème ul qui devient enfant de li
	var menu_li_2_ul = document.createElement("ul");
	menu_li_2.appendChild(menu_li_2_ul); 

	//Remplissage du deuxième menu
	var text=""; //text à afficher
	var i=0;
	for (i = 0; i < listPokemon.length; i++)
	{
		text += "<li><a href='#' class='declencheur' id="+listPokemon[i]['nom']+">Famille "+listPokemon[i]['nom']+"</a></li>";
	}
	menu_li_2_ul.innerHTML = text;

	//////////////menu 3 li
	//création de li, li devient enfant de ul (listmenu)
	var menu_li_3 = document.createElement("li");
	menu_li_3.innerHTML = "<a href='#'>Sources</a>";
	listmenu.appendChild(menu_li_3); 

	//création du 2ème ul qui devient enfant de li
	var menu_li_3_ul = document.createElement("ul");
	menu_li_3.appendChild(menu_li_3_ul); 

	//Remplissage du premier menu
	var menu_li_3_ul_li1 = document.createElement("li");
	menu_li_3_ul_li1.innerHTML = "<a href='https://www.pokebip.com/pokedex/'>Pokebip</a>";
	menu_li_3_ul.appendChild(menu_li_3_ul_li1);

	var menu_li_3_ul_li2 = document.createElement("li");
	menu_li_3_ul_li2.innerHTML = "<a href='http://www.pokepedia.fr/Portail:Accueil'>Poképedia</a>";
	menu_li_3_ul.appendChild(menu_li_3_ul_li2);
}



//MISE EN PLACE DU TABLEAU
function tabPokemon()
{
	//on cible la balise div "pageContent", on créé tableau et il devient l'enfant de div
	var divTab=document.getElementById("pageContent");
	var tabPokemon = document.createElement("table");
	tabPokemon.id = "ancre_tableau";
	//tabPokemon.style.border = "2px"; // pour tester
	divTab.appendChild(tabPokemon); 

	//thead enfant de table
	var theadTabPokemon = document.createElement("thead");
	theadTabPokemon.id = "idThead";
	tabPokemon.appendChild(theadTabPokemon); 

	//tbody enfant de table
	var tbodyTabPokemon = document.createElement("tbody");
	tbodyTabPokemon.id = "idTbody";
	tabPokemon.appendChild(tbodyTabPokemon); 

	//tr enfant du thead
	var trThead = document.createElement("tr");
	theadTabPokemon.appendChild(trThead); 


	var textA=""; //text à afficher
	textA += "<td>Portrait</td>";
	textA += "<td>Nom</td>";
	textA += "<td>N°</td>";
	textA += "<td>Type</td>";
	textA += "<td>Description</td>";

	//INSERTION DU TEXTE DANS thead
	trThead.innerHTML = textA;

	//remplissage du tbody
	bodyTabPokemon();
}



//CONTENU DU TABLEAU
function bodyTabPokemon()
{
	//on cible tbody
	var tbody=document.getElementById("idTbody");
	var text; //text à afficher

	//Parcours de la liste de pokémon
	for (i = 0; i < listPokemon.length; i++)
	{
		text = ""; //reset

		//test pour la deuxième image
		if(listPokemon[i]['pathImgType2']!=null)
		{
			var img2="<img src='"+listPokemon[i]['pathImgType2']+"' class='img_col3_element'>";
		}else{
			var img2="";
		}

		// je crée la liste (Tr)
		var newTr = document.createElement("tr");

		// je l’ajoute comme enfant du nœud principal
		tbody.appendChild(newTr); 

		text += "<!-- POKEMON "+i+" -->";
		text += "<tr>";
		//parcours des caracteristiques du pokémon
		text += "<td><img src='"+listPokemon[i]['pathImg']+"' class='img_col1_pokedex declencheur' id="+listPokemon[i]['nom']+"></td>";
		text += "<td>"+listPokemon[i]['nom']+"</td>";
		text += "<td>"+listPokemon[i]['numero']+"</td>";
		text += "<td><img src='"+listPokemon[i]['pathImgType1']+"' class='img_col3_element'>"+img2+"</td>"
		text += "<td>"+listPokemon[i]['description']+"</td>";
		text += "</tr>";

		//INSERTION DU TEXTE DANS TBODY
		newTr.innerHTML = text;
	}

}