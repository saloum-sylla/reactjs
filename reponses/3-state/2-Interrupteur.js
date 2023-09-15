/*
2. Interrupteur On/Off :

Créez un composant de classe qui affiche "Off" initialement (défini dans le state).
Ajoutez un bouton qui, lorsqu'il est cliqué, change l'affichage entre "On" et "Off" en utilisant this.setState.
*/
import React from "react";

class Interrupteur extends React.Component {
  // 1. Initialisation du state directement sans le constructeur
  state = {
    isOn: false,
  };

  // 2. Méthode pour changer l'état en utilisant une fonction fléchée
  toggleSwitch = () => {
    this.setState((prevState) => ({
      isOn: !prevState.isOn,
    }));
  };

  // 3. Rendu et Gestion des événements
  render() {
    return (
      <div>
        <p>{this.state.isOn ? "On" : "Off"}</p>
        <button onClick={this.toggleSwitch}>Basculer</button>
      </div>
    );
  }
}

export default Interrupteur;
