/**
 * Configurer l'environnement de développement :

Assurez-vous d'avoir Node.js installé sur votre machine.
Créez un projet React en utilisant Create React App ou configurez un projet React manuellement.
Créer un composant TodoList :

Créez un composant React appelé TodoList qui servira de conteneur principal pour la liste de tâches.
Gérer l'état des tâches :

Utilisez le hook useState pour gérer l'état des tâches. Créez un tableau d'objets représentant chaque tâche. Chaque objet doit avoir des propriétés telles que id, name (nom de la tâche), et completed (état de la tâche).
Afficher la liste des tâches :

Utilisez une boucle (par exemple, map) pour parcourir le tableau de tâches et afficher chaque tâche dans le composant TodoList. Chaque tâche doit être affichée sous la forme d'un élément <li>.
Ajouter des tâches :

Créez un formulaire ou une zone de texte permettant à l'utilisateur de saisir le nom d'une nouvelle tâche.
Créez une fonction pour ajouter une nouvelle tâche au tableau d'objets lorsque le formulaire est soumis.
Marquer les tâches comme terminées/non terminées :

Ajoutez des boutons ou des cases à cocher permettant à l'utilisateur de marquer une tâche comme terminée ou non terminée.
Créez une fonction pour mettre à jour l'état d'une tâche lorsqu'un bouton est cliqué.
Modifier les noms des tâches :

Ajoutez des boutons "Modifier" à côté de chaque tâche.
Créez une fonction pour permettre à l'utilisateur de modifier le nom d'une tâche existante.
Supprimer des tâches :

Ajoutez des boutons "Supprimer" à côté de chaque tâche.
Créez une fonction pour permettre à l'utilisateur de supprimer une tâche existante.
Interface utilisateur conviviale :

Appliquez des styles CSS ou utilisez un framework de style pour rendre l'interface utilisateur conviviale.
Assurez-vous que les boutons et les actions sont clairs pour l'utilisateur.
Fonctionnalités supplémentaires (optionnelles) :

Ajoutez des fonctionnalités supplémentaires telles que le filtrage, le tri ou la gestion des dates d'échéance selon vos besoins.
 */
import React, { useState } from "react";

function TodoList() {
  // État pour stocker la liste des tâches
  const [tasks, setTasks] = useState([]);
  // État pour stocker la nouvelle tâche saisie par l'utilisateur
  const [newTask, setNewTask] = useState("");

  // Fonction pour ajouter une tâche à la liste
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  // Fonction pour supprimer une tâche de la liste
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Ma liste de tâches</h1>
      <div>
        <input
          type="text"
          placeholder="Nouvelle tâche"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Ajouter</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => deleteTask(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
