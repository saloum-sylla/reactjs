/*
Gestion des événements onClick dans React
Dans React, la gestion des événements est très similaire à celle des éléments DOM, mais avec quelques différences syntaxiques. 
Par exemple, les événements React sont nommés en camelCase plutôt qu'en minuscules.

Au lieu d'utiliser une chaîne de caractères comme gestionnaire d'événements, 
comme c'est le cas en HTML pur, avec JSX, vous passez une fonction.
        <button onClick={() => this.uneFonction()}></button> 
*/

/*
1. Compteur simple :

Créez un composant fonctionnel qui affiche un nombre (initialisé à 0 avec le Hook useState).
Ajoutez un bouton "Incrémenter" qui, lorsqu'il est cliqué, augmente la valeur du compteur de 1 en utilisant setCount (ou le nom que vous donnez à la fonction de mise à jour du Hook useState).
*/
import React, { useState } from "react";

function CounterComponent() {
  // Initialisation de l'état "count" à 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p> {/* Affichage de la valeur actuelle du compteur */}
      <button onClick={() => setCount(count + 1)}>Incrémenter</button>{" "}
      {/* Bouton pour incrémenter le compteur */}
    </div>
  );
}

export default CounterComponent;
