// Dans l'array toDo un valeur true signifie que cette action est accomplie, une valeur false signifie qu'elle est à faire
let notesJSON = [
	{
		"titre": "Notes Javascript",
		"texte": "Une méthode est une fonction appartenant à un objet",
		"date": "15/01/2021",
		"couleur": "rouge",
		"dateRappel": "null"
	},
	{
		"titre": "Notes Javascript",
		"toDo": [
			{"Faire les courses": true},
			{"Payer le loyer": false}
		],
		"date": "18/01/2021",
		"couleur": "vert",
		"dateRappel": "null"
	}
]
class Note{
	constructor(titre,texte,date,couleur,dateRappel){
		this._titre=titre;
		this._date=date;
		this._texte=texte;
		this._couleur=couleur;
		this._dateRappel=dateRappel;
	}
	get titre(){
		return this.prix;
	}
	set titre(newTitre){
		this._titre=newTitre;
	}
	get date(){
		return this.date;
	}
	get couleur(){
	return this.couleur;
	}
	get dateRappel(){
		return this.dateRappel;
	}
}

notesArray=[];
notesJSON.forEach(function(element){
	notesArray.push(new Note(element.titre,element.texte,element.date,element.couleur,element.dateRappel));
})
console.log(notesArray[1]);
