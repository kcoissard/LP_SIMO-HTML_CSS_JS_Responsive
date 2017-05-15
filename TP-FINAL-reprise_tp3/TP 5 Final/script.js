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

listPokemon[0] = new Pokemon("Ptitard", "images/ptitard.png", 60,
	 "images/eau_logo.png", "", "Tout ce que l'on sait, c'est qu'il est mignon.", "images/logo_male.png", "Ptitard", "Tetard", "Tartard");

listPokemon[1] = new Pokemon("Lokhlass", "images/lokhlass.png", 131,
	 "images/eau_logo.png", "images/glace_logo.png", "Parcequ'il est meilleur que Dracolosse !", "images/logo_femelle.png", "Lokhlass", "", "");

listPokemon[2] = new Pokemon("Staross", "images/staross.png", 121,
	 "images/eau_logo.png", "", "Parcequ'il a des jolies couleurs.", "images/logo_femelle.png", "Stari", "Staross", "");

listPokemon[3] = new Pokemon("Lamantine", "images/lamantine.png", 87,
 "images/eau_logo.png", "images/glace_logo.png", "Parceque c'est une licorne des mers.", "images/logo_femelle.png", "Otaria", "Lamantine", "");

listPokemon[4] = new Pokemon("Artikodin", "images/artikodin.png", 144,
	 "images/air_logo.png", "images/glace_logo.png", "Parceque sans lui ça va être difficile de battre Peter le maître de la ligue.", "images/logo_male.png", "Artikodin", "", "");

listPokemon[5] = new Pokemon("Krabboss", "images/krabboss.png", 99,
	 "images/eau_logo.png", "", "Parcequ'un crabe avec ultralaser, ça n'a pas de prix.", "images/logo_male.png", "Krabby", "Krabboss", "");
	
	

//TROUVER UN POKEMON PAR SON NOM
function getPokemonByName(nom)
{
	var compteur;
	var nomPoke;

	for (compteur = 0; compteur < listPokemon.length; compteur++)
	{
		nomPoke = listPokemon[compteur]['nom'].toLowerCase();

		if(nom==nomPoke)
		{
			//retourne l'objet pokemon
			return listPokemon[compteur];
		}
	}
}


//TEST ELEMENT CONTIENT UNE CLASSE
function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}


//ACTIVATION/DESACTIVATION DES DISPLAY NONE
document.addEventListener("click", function(event){ 
	displayOrNot();
});

function displayOrNot()
	{
		var targetPokemon = event.target || event.srcElement;
	    var idTargetPokemon = targetPokemon.id;
	    idTargetPokemon=idTargetPokemon.toLowerCase();//tout en minuscule

	    //var test;

	    //div tableau ou detail a activer/desactiver au clique
	    var tabDisplay = document.getElementById("pageContent");
	    var detailDisplay = document.getElementById("detailPokemon");


	    //declenchement via image pokemon
	    if(hasClass(targetPokemon, "declencheur")==true)
	    {
	    	//si le tableau est affiché, on le cache
	    	if(hasClass(tabDisplay, "inactive")==false)
		    {
		    	tabDisplay.className += "inactive";
		    	detailPokemon(idTargetPokemon);
		    	detailDisplay.className = "";
		    }
		    //sinon on réaffiche le tableau et cache le detail
		    else
		    {
		    	tabDisplay.className = "";
		    	detailDisplay.className += "inactive";
		    	detailDisplay.innerHTML='';//efface le contenu du detail
		    }   
	    }
	}





//AFFICHAGE DU DETAIL POKEMON
function detailPokemon(pokemon)
{
	var pokemonEnDetail = getPokemonByName(pokemon);

	//on cible la div menu, on créé la liste et elle devient l'enfant de la liste
	var divDetailPokemon=document.getElementById("detailPokemon");

	//div portrait_pokemon
	var div_portrait_pokemon = document.createElement("div");
	div_portrait_pokemon.id="portrait_pokemon";
	div_portrait_pokemon.innerHTML="<span ><img src='"+pokemonEnDetail['pathImg']+"' class='img_portrait_principal declencheur'></span><span id='portrait_nom'>"+pokemonEnDetail['nom']+"</span>";
	divDetailPokemon.appendChild(div_portrait_pokemon); 

	//div header_detail_pokemon
	var header_detail_pokemon = document.createElement("div");
	header_detail_pokemon.className="header_detail_pokemon";
	header_detail_pokemon.innerHTML="<span id='description_pokemon_titre' class='titres_detail_pokemon'><strong>Description</strong></span><br />";
	header_detail_pokemon.innerHTML+="<span id='description_pokemon_contenu'><strong>"+pokemonEnDetail['description']+"</strong></span>";
	divDetailPokemon.appendChild(header_detail_pokemon); 

	//article 1 type et genre
	var article_un = document.createElement("article");
	article_un.className="flex_article border_radius_ptitard";
	divDetailPokemon.appendChild(article_un); 
		//section 1 article 1
		var article_un_section_une = document.createElement("section");
		article_un_section_une.id="img_logo_type";
		article_un_section_une.innerHTML="<p class='titres_detail_pokemon'>Type</p><br/>";
		article_un_section_une.innerHTML+="<img src='"+pokemonEnDetail['pathImgType1']+"' class='img_logo_type_detail'>";
		article_un_section_une.innerHTML+="<img src='"+pokemonEnDetail['pathImgType2']+"' class='img_logo_type_detail'>";
		article_un.appendChild(article_un_section_une);
		//section 2 article 1
		var article_un_section_deux = document.createElement("section");
		article_un_section_deux.innerHTML="<p class='titres_detail_pokemon'>Genre</p><br/>";
		article_un_section_deux.innerHTML+="<img src='"+pokemonEnDetail['pathGenre']+"' class='img_sexe'>";
		article_un.appendChild(article_un_section_deux);

	//article 2 famille du pokémon
	var article_deux = document.createElement("article");
	article_deux.className="border_radius_ptitard";
	divDetailPokemon.appendChild(article_deux); 
		//titre
		var titre_article_deux = document.createElement("p");
		titre_article_deux.className="titres_detail_pokemon";
		titre_article_deux.innerHTML="\"Famille "+pokemonEnDetail['nom']+"\"";
		article_deux.appendChild(titre_article_deux); 
		//div flex article
		var div_flex_article = document.createElement("div");
		div_flex_article.className="lex_article";
		article_deux.appendChild(div_flex_article); 
			//section 1 flex article
			var section_un_div_flex_article = document.createElement("div");
			section_un_div_flex_article.innerHTML="<img src='images/"+pokemonEnDetail['evoFirst'].toLowerCase()+".png' class='img_famille_pokemon'><br />";
			section_un_div_flex_article.innerHTML+="<span class='nom_evolution'>"+pokemonEnDetail['evoFirst']+"</span>";
			div_flex_article.appendChild(section_un_div_flex_article); 

			if(pokemonEnDetail['evoSecond']!='')
			{
			//section 2 flex article
			var section_deux_div_flex_article = document.createElement("div");
			section_deux_div_flex_article.innerHTML="<img src='images/"+pokemonEnDetail['evoSecond'].toLowerCase()+".png' class='img_famille_pokemon'><br />";
			section_deux_div_flex_article.innerHTML+="<span class='nom_evolution'>"+pokemonEnDetail['evoSecond']+"</span>";
			div_flex_article.appendChild(section_deux_div_flex_article); 
			}
			
			if(pokemonEnDetail['evoThird']!='')
			{
			//section 3 flex article
			var section_trois_div_flex_article = document.createElement("div");
			section_trois_div_flex_article.innerHTML+="<img src='images/"+pokemonEnDetail['evoThird'].toLowerCase()+".png' class='img_famille_pokemon'><br />";
			section_trois_div_flex_article.innerHTML+="<span class='nom_evolution'>"+pokemonEnDetail['evoThird']+"</span>";
			div_flex_article.appendChild(section_trois_div_flex_article); 
			}
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


//fonction util pour avoir la valeur du filtre
function recupererValeurFiltre()
{
	var champsFiltre = document.getElementById("champsFiltre");
	champsFiltre=champsFiltre.value;
	return champsFiltre;
}

//FONCTION GLOBALE DE RECHERCHE
function recherche()
{
//PARTIE 1 RECHERCHE AVEC NOM
	var pokeParcouru;
	var valeurFiltre = recupererValeurFiltre();
	for (compteur = 0; compteur < listPokemon.length; compteur++)
	{	
		pokeParcouru=listPokemon[compteur]['nom'].toLowerCase();
		console.log("v : "+valeurFiltre+"p:"+pokeParcouru);

		if(valeurFiltre==pokeParcouru)
		{	
			var tabDisplay = document.getElementById("pageContent");
	    	var detailDisplay = document.getElementById("detailPokemon");

			if(hasClass(tabDisplay, "inactive")==false)
		    {
				tabDisplay.className += "inactive";
			}
		    	detailPokemon(pokeParcouru);
		    	detailDisplay.className = "";
		}	
	}

//PARTIE 2 PAS EU LE TEMPS TERMINER, délai beaucoup trop court ...
}