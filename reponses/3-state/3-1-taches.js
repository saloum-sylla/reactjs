/*
Spread Operator:
Si vous avez un tableau et que vous souhaitez copier ses éléments dans un nouveau tableau, 
vous pouvez utiliser la syntaxe spread :
    const arr = [1, 2, 3];
    const arr2 = [...arr];
    console.log(arr2) // [1, 2, 3]
pour ajouter un element:
    const arr2 = [...arr,4];
    console.log(arr2) // [1, 2, 3, 4]

*/
/*
exercice:
Fusion de tableaux :
Vous avez deux tableaux :
const fruits = ["pomme", "banane", "cerise"];
const légumes = ["carotte", "brocoli"];
Utilisez le Spread Operator pour créer un nouveau tableau aliments qui contient tous les éléments des deux tableaux.
*/
const fruits = ["pomme", "banane", "cerise"];
const légumes = ["carotte", "brocoli"];
const aliments = [...fruits, ...légumes];
console.log(aliments); // Affiche ["pomme", "banane", "cerise", "carotte", "brocoli"]

/*
2. Ajout d'éléments :
Vous avez un tableau :
const nombres = [1, 2, 3];
Utilisez le Spread Operator pour ajouter les nombres 4, 5 et 6 à la fin du tableau sans modifier le tableau original.
*/
const nombres = [1, 2, 3];
const nouveauxNombres = [...nombres, 4, 5, 6];
console.log(nouveauxNombres); // Affiche [1, 2, 3, 4, 5, 6]

/*
3. Clonage d'objets :
Vous avez un objet :
const voiture = { marque: "Toyota", modèle: "Corolla" };
Utilisez le Spread Operator pour créer un nouvel objet nouvelleVoiture qui est une copie de l'objet voiture, mais avec une propriété supplémentaire couleur: "rouge".
*/
const voiture = { marque: "Toyota", modèle: "Corolla" };
const nouvelleVoiture = { ...voiture, couleur: "rouge" };
console.log(nouvelleVoiture); // Affiche { marque: "Toyota", modèle: "Corolla", couleur: "rouge" }

/*
4. Fusion d'objets :
Vous avez deux objets :

const infosPersonnelles = { nom: "Dupont", prénom: "Jean" };
const infosContact = { email: "jean.dupont@email.com", téléphone: "0123456789" };
Utilisez le Spread Operator pour fusionner ces deux objets en un seul objet infosComplètes.

*/
const infosPersonnelles = { nom: "Dupont", prénom: "Jean" };
const infosContact = {
  email: "jean.dupont@email.com",
  téléphone: "0123456789",
};
const infosComplètes = { ...infosPersonnelles, ...infosContact };
console.log(infosComplètes); // Affiche { nom: "Dupont", prénom: "Jean", email: "jean.dupont@email.com", téléphone: "0123456789" }

// Conseil : Pour chaque étape, après avoir écrit votre code, essayez d'afficher le résultat avec console.log() pour vérifier que vous avez obtenu le résultat attendu.
