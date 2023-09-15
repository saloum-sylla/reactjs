/*
1. Compteur simple :

Créez un composant de classe qui affiche un nombre (initialisé à 0 dans le state).
Ajoutez un bouton "Incrémenter" qui, lorsqu'il est cliqué, augmente la valeur du compteur de 1 en utilisant this.setState.

*/
// Importation du module React
import React from "react";

// Définition et exportation d'une classe Counter qui étend React.Component
export default class Counter extends React.Component {
  // Constructeur de la classe
  constructor(props) {
    // Appel du constructeur de la classe parente (React.Component) avec les props
    super(props);
    // Initialisation du state avec une propriété "count" définie à 0
    this.state = { count: 0 };
  }

  // Méthode pour incrémenter la valeur de "count" dans le state
  incrementCount() {
    // Utilisation de setState pour mettre à jour la valeur de "count" en l'augmentant de 1
    this.setState({ count: this.state.count + 1 });
  }

  // Méthode render pour définir ce que le composant doit afficher
  render() {
    return (
      // Conteneur principal
      <div>
        {/* Affichage de la valeur actuelle de "count" du state*/}
        <div>Count: {this.state.count}</div>
        {/* Bouton qui, lorsqu'il est cliqué, appelle la méthode incrementCount pour augmenter le compteur*/}
        <button onClick={() => this.incrementCount()}>Incrémenter</button>
      </div>
    );
  }
}
