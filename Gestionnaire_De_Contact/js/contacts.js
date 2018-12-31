/* Copyright Younsi Farouk pharouky@gmail.com*/
/* Activité : gestion des contacts*/

console.log("Bienvenue dans le gestionnaire des contacts !");

// 1- Je crée la class du répertoire de contacts !!!
class Contacts {
  constructor (nom, prenom){
    this.nom = nom;
    this.prenom = prenom;
  }
  decrire (){
    return `Nom : ${this.nom}, Prenom : ${this.prenom}`;
  }
}

// 2- J'ajoute les contacts initiaux !!!
const contact1 = (new Contacts ("Lévisse", "Carole"));
const contact2 = (new Contacts ("Nelsonne", "Mélodie"));

// 3- Je crée une fonction pour affichier le menu !!!
function listeDeChoix() {
	const menu = `
	1 : Lister les contacts
	2 : Ajouter un contact
	0 : Quitter
	`;
	return console.log(menu);
}

// 4- Je crée une fonction pour afficher la liste des contacts !!!
function listerLesContacts(contacts) {
 	console.log("Voici la liste de tous les contacts dans le géstionnaire :");
	contacts.forEach(contact => { // Je crée une boucle pour afficher et lister tous les contacts contenant dans le tableau !!!
    console.log(`${contact.decrire()}`);
    });
}

// 5- Je créé un tableau englobant les contacts initiaux !!!
const contacts = [contact1, contact2];

// 6- Je crée une fonction pour ajouter un nouveau contact au repertoire !!!
function ajouterUnContact(nom, prenom) {
 	const newContact = (new Contacts (nom, prenom));
	contacts.push(newContact);// J'ajoute le nouveau contact au tableau !!!
	return console.log("Le nouveau contact à été ajouté avec succés.");
}

let choix = "";
// 7- Je crée la boucle avec while pour répeter le programme autant de fois que l'utilisateur le demande !!!
while (choix !== "0"){
  listeDeChoix();
  choix = prompt("Choisissez une option");
  if (choix === "1") {
      listerLesContacts(contacts)
  } else if (choix === "2") {
      let nom = prompt("Saisissez le nom :");
      let prenom = prompt("Saisissez le prénom :");
      ajouterUnContact(nom, prenom);
  }
}
// 8- Je crée une condition if pour sortir du gestionnaire est terminer le programme !!!
if (choix === "0"){
    console.log("A bientot pour de nouvelle aventures ;) !");
}
// TODO : complétez le programme