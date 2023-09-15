/*
Créez un composant de classe qui contient un champ de saisie 
Lorsque l'utilisateur saisit une tâche et la valide,elle remplace l'ancienne valeur du state et s'affiché a l'ecran

aide :
    Gestion des événements :
        Utilisez l'événement onChange sur l'élément <input> pour détecter chaque modification du champ de saisie en utilisant une fonction de rappel
         qui prendra en argument l'événement lui-même, souvent désigné par event, permettant d'accéder à la valeur saisie via event.target.value.
         Cette fonction mettra à jour le state avec la nouvelle valeur.
    Affichage de la valeur :
        Pour afficher la valeur actuelle de la tâche à l'écran, utilisez {this.state.task} dans votre méthode render.     
*/

import React from "react";

// Définition d'un composant de classe nommé InputComponent
class InputComponent extends React.Component {
  // Constructeur du composant
  constructor(props) {
    super(props); // Appel du constructeur de la classe parente (React.Component)
    // Initialisation du state avec une propriété "task" vide
    this.state = {
      task: "",
    };
  }

  // Méthode pour gérer les changements dans le champ de saisie
  handleInputChange = (event) => {
    // Mise à jour de la propriété "task" du state avec la valeur saisie par l'utilisateur
    this.setState({
      task: event.target.value,
    });
  };

  // Méthode pour rendre le composant
  render() {
    return (
      <div>
        {/* Champ de saisie qui utilise la valeur de "task" du state comme valeur et appelle handleInputChange à chaque modification */}
        <input
          type="text"
          value={this.state.task}
          onChange={this.handleInputChange}
          placeholder="Saisissez une tâche"
        />
        {/* Affichage de la tâche saisie par l'utilisateur */}
        <div>Votre tâche : {this.state.task}</div>
      </div>
    );
  }
}

// Exportation du composant pour qu'il puisse être utilisé dans d'autres fichiers
export default InputComponent;
