// // Importation de la bibliothèque React
// import React from 'react';
// // Définition du composant "WelcomeClass " en tant que composant de class
// class WelcomeClass  extends React.Component {
//     // La méthode render est responsable de la description de ce que le composant doit afficher
//     render() {
//         // Retourne un élément h1 qui affiche un message de bienvenue en utilisant la prop "name" passée au composant
//         return <h1>Bonjour, {this.props.name}</h1>;
//     }
// }
// // Exportation du composant WelcomeClass  pour qu'il puisse être utilisé dans d'autres fichiers
// export default WelcomeClass ;
    
    // Importation de la bibliothèque React
    import React from 'react';
    // Définition du composant "Welcome" en tant que composant de class
    class WelcomeClass extends React.Component {
        // La méthode render est responsable de la description de ce que le composant doit afficher
        render(props) {
            // Retourne un élément h1 qui affiche un message de bienvenue en utilisant la prop "name" passée au composant
            return <h1>Bonjour, {this.props.name}</h1>;
        }
    }
    // Exportation du composant WelcomeClass pour qu'il puisse être utilisé dans d'autres fichiers
    export default WelcomeClass;