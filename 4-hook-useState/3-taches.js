/*
map
  La méthode map est une méthode intégrée des tableaux en JavaScript utilisée en React pour transformer un tableau de données en un tableau d'éléments JSX
  La méthode map crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant.
    const tasks = ['Manger', 'Dormir', 'Coder'];  
    function TaskList() {
      return (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      );
    }
    Dans cet exemple, pour chaque tâche dans le tableau tasks, map crée un élément <li> contenant cette tâche. 
    Le résultat est un tableau d'éléments <li>, qui est ensuite rendu à l'intérieur de l'élément <ul>.
    
key
  L'attribut key est un élément spécial dans React. 
  Lorsque vous créez une liste d'éléments générés dynamiquement en React (par exemple, en utilisant la méthode .map()), 
  React a besoin d'une manière de distinguer chaque élément individuel de la liste. 
  Voici pourquoi l'attribut key est important 
  il est important de noter que l'utilisation de l'index comme key n'est généralement pas recommandée, 
  sauf si la liste n'est pas modifiée (pas d'ajouts, suppressions ou réorganisations d'éléments)
*/

/*
3. Liste de tâches :
Créez un composant fonctionnel qui contient un champ de saisie et une liste vide (ul li). 
Lorsque l'utilisateur saisit une tâche et appuie sur "Ajouter", la tâche doit être ajoutée à la liste. 
Les tâches doivent être stockées dans un tableau à l'aide du Hook useState
*/
