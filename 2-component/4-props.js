/*
Les "props" sont des données que l'on passe d'un composant parent à un composant enfant dans React.

Définition d'un composant avec des props :
fonctionnel:
    // Importation de la bibliothèque React (si ce n'est pas déjà fait)
    import React from 'react';
    // Définition du composant "Welcome" en tant que fonction fléchée
    const Welcome = (props) => {
        // Retourne un élément h1 qui affiche un message de bienvenue
        // en utilisant la prop "name" passée au composant
        return <h1>Bonjour, {props.name}</h1>;
    }
    // Exportation du composant Welcome pour qu'il puisse être utilisé dans d'autres fichiers
    export default Welcome;

class:    
    // Importation de la bibliothèque React
    import React from 'react';
    // Définition du composant "Welcome" en tant que composant de class
    class Welcome extends React.Component {
        // La méthode render est responsable de la description de ce que le composant doit afficher
        render() {
            // Retourne un élément h1 qui affiche un message de bienvenue en utilisant la prop "name" passée au composant
            return <h1>Bonjour, {this.props.name}</h1>;
        }
    }
    // Exportation du composant Welcome pour qu'il puisse être utilisé dans d'autres fichiers
    export default Welcome;

Utilisation du composant :
import React from "react";
// Définition du composant "Welcome" en tant que composant de class
class Welcome extends React.Component {
    render() {
        return <h1>Bonjour, {this.props.name}</h1>;
    }
}
function App() {
  return (
    <>
        <Welcome name="Sara" />;
    </>
  );
}
export default App;
*/

/*
Exercice : Affichage d'un Message Personnalisé avec Props
Objectif : Créer 2 composants (1 fonctionnel, 1 class) qui affichent un message personnalisé en utilisant les props.

Étapes :

Définissez 2 composants (1 fonctionnel, 1 class)  qui acceptent une prop .

Dans le composant principal App, utilisez les composants passez une valeur pour la prop .

Lancez votre application pour voir le message personnalisé affiché à l'écran.
*/
