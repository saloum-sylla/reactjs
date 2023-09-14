/*      COURS       */
/*
La méthode createElement est une fonction fondamentale de la bibliothèque React. 
Elle est utilisée pour créer et renvoyer des éléments React, 
qui sont les plus petites unités de construction des interfaces utilisateur React.

Syntaxe de createElement :
importation de React: import React from 'react';

React.createElement(type, [props], [...children])
    type :  élément que vous souhaitez créer. 
            Cela peut être une chaîne (pour les éléments DOM comme 'div', 'span', etc.) 

    props : Un objet contenant les propriétés (ou "props") que vous souhaitez passer à l'élément. 
            Cela peut inclure des attributs comme className ou id pour les éléments DOM, 

    children : Les éléments enfants qui doivent être imbriqués à l'intérieur de l'élément créé. 
            Cela peut être du texte, d'autres éléments React, ou un mélange des deux.
*/

/**
 * Exercice : Créer un titre avec createElement
Objectif : Utilisez React.createElement pour créer un titre (h1) 

Étapes :
Modification de App.js :
Ouvrez src/App.js dans votre éditeur de code.
Remplacez le contenu du return du composant App pour utiliser React.createElement au lieu de JSX.
 */
