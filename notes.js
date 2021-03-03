// Dans l'array toDo un valeur true signifie que cette action est accomplie, une valeur false signifie qu'elle est à faire
let notesJSON = `[
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
]`
class Note{
	constructor(titre,date,couleur,dateRappel){
		if(typeof titre==='string'){this._titre=titre;}
		if(typeof date==='string'){this._date=date;}
		if(typeof couleur==='string'){this._couleur=couleur;}
		if(typeof dateRappel==='string'){this._dateRappel=dateRappel;}
	}
	get titre(){
		return this._titre;
	}
	get date(){
		return this._date;
	}
	get couleur(){
	return this._couleur;
	}
	get dateRappel(){
		return this._dateRappel;
	}
	set titre(newTitre){
		if(typeof newTitre==='string'){
		this._titre=newTitre;
		}
	}
	set date(newDate){
		if(typeof newDate==='string'){
		this._date=newDate;
	}
	}
	set couleur(newCouleur){
		if(typeof newCouleur==='string'){
		this._couleur=newCouleur;
		}
	}
	set dateRappel(newDateRappel){
		if(typeof newDateRappel==='string'){
		this._dateRappel=newDateRappel;
		}
	}
}
class TextNote extends Note{
	constructor(titre,texte,date,couleur,dateRappel){
		super(titre,date,couleur,dateRappel);
		if(typeof texte==='string'){
			this._texte=texte;
		}
	}
	get texte(){
		return this._texte;
	}
	set texte(newTexte){
		if(typeof newTexte==='string'){
			this._texte=newTexte;
		}
	}
}
class CheckListNote extends Note{
	constructor(titre,toDo,date,couleur,dateRappel){
		super(titre,date,couleur,dateRappel);
		if(Array.isArray(toDo)){
			this._toDo=toDo;
		}
	}
	get toDo(){
		return this._toDo;
	}
	set toDo(newToDo){
		if(Array.isArray(newToDo)){
			this._toDo=newToDo;
		}
	}
}

let notesParsedArray=JSON.parse(notesJSON);

/*notesJSON.forEach(function(element){
	notesArray.unshift(
		if(element.texte=true){
		new TextNote(element.titre,element.texte,element.date,element.couleur,element.dateRappel);
	}		else if(element.checkList=true){
		new CheckList(element.titre,element.toDo,element.date,element.couleur,element.dateRappel);
	}

);*/
let notesArray=[];
notesParsedArray.forEach(function(element) {
	if(element.toDo!==undefined){
		notesArray.unshift(new CheckListNote(element.titre,element.toDo,element.date,element.couleur,element.dateRappel));
		console.log(element.toDo);
	}else if(element.texte!==undefined){
		notesArray.unshift(new TextNote(element.titre,element.texte,element.date,element.couleur,element.dateRappel));
		console.log(element.texte)
	}
	
});

