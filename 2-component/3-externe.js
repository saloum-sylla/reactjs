/*
*******************Séparation des Composants React dans des Fichiers Externes************************
Pour optimiser la structure de votre projet React, 
il est vivement conseillé de placer chaque composant dans un fichier distinct. 
Cette approche offre une meilleure organisation du code, le rend plus clair et simplifie la réutilisation des composants.

Lors de la création d'un fichier pour un composant, respectez les conventions suivantes :
    Nommez le fichier en suivant la règle de la majuscule initiale pour le nom du composant.
    N'oubliez pas d'importer React ainsi que toute autre dépendance requise en début de fichier.
    À la fin du fichier, exportez votre composant en utilisant la syntaxe : export default NomDuComposant.
Lorsque vous souhaitez utiliser ce composant dans un autre fichier, importez-le en utilisant la syntaxe :
    import NomDuComposant from './CheminVersLeFichier';.

    // exemple: 
    // dans Salutation.js//
    import React from 'react';
    
    function Salutation(props) {
        return <h1>Bonjour, {props.nom} !</h1>;
    }
    
    export default Salutation;
    // 
    // dans App.js
    import React from 'react';
    import Salutation from './Salutation';  // Importation du composant
    
    function App() {
        return (
            <div>
            <Salutation />
            </div>
            );
        }

    export default App;
        
        */

/*
        Exercice :  
    Séparation des Composants dans des Fichiers Externes

Objectif : 
    Déplacer les composants MonComposant et MonComposantClass dans des fichiers séparés et les importer dans le fichier App.js.
*/
