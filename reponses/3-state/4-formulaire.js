/**
 5. Formulaire d'inscription :

Créez un composant de classe avec deux champs de saisie : "Nom d'utilisateur" et "Mot de passe" (définis dans le state).
Ajoutez un bouton "S'inscrire".
Lorsque l'utilisateur remplit les champs et clique sur "S'inscrire", 
stockez les informations saisies dans le state en utilisant this.setState et affichez un message de confirmation.
Assurez-vous d'ajouter une validation simple, comme vérifier que le champ du mot de passe n'est pas vide.
 */
// Importation du module React
import React from "react";

// Définition du composant SignupForm comme une classe étendant React.Component
class SignupForm extends React.Component {
  // Initialisation de l'état local du composant
  state = {
    username: "",
    password: "",
  };

  // Gestionnaire d'événement pour suivre les modifications des champs de saisie
  handleChange = (event) => {
    const name = event.target.name; // Récupération du nom du champ (username ou password)
    this.setState({
      [name]: event.target.value, // Mise à jour de l'état avec la nouvelle valeur saisie
    });
  };

  // Gestionnaire d'événement pour le formulaire lors de la soumission
  handleSubmit = (event) => {
    event.preventDefault(); // Empêche le comportement par défaut du formulaire (rechargement de la page)
    if (this.state.password === "") {
      alert("Veuillez entrer un mot de passe valide."); // Affiche une alerte si le mot de passe est vide
    } else {
      alert(
        "Inscription réussie avec le nom d'utilisateur : " + this.state.username // Affiche une alerte avec le nom d'utilisateur saisi
      );
    }
  };

  // Méthode de rendu du composant
  render() {
    return (
      // Formulaire avec un gestionnaire d'événement pour la soumission
      <form onSubmit={this.handleSubmit}>
        <label>
          Nom d'utilisateur:
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange} // Gestionnaire d'événement pour suivre les modifications du champ
          />
        </label>
        <br />
        <label>
          Mot de passe:
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange} // Gestionnaire d'événement pour suivre les modifications du champ
          />
        </label>
        <br />
        <input type="submit" value="S'inscrire" />{" "}
        {/* Bouton pour soumettre le formulaire */}
      </form>
    );
  }
}

// Exportation du composant pour pouvoir l'utiliser ailleurs dans l'application
export default SignupForm;
