# Projet

## Bibliothèque axios : 
- axios, un client HTTP basé sur les Promesses.
- permettre d'utiliser un fetch
- rapide et performant

## Hook :
- useState
- useEffect
- Un Hook est une fonction qui permet de « se brancher » sur des fonctionnalités React.
Par exemple, useState est un Hook qui permet d’ajouter l’état local React à des fonctions composants.
  - Auparavant, quand on écrivait une fonction composant et qu'on avait  besoin d’un état local à l’intérieur,
  on devait la convertir en classe => maintenant on peut utiliser un Hook à l’intérieur de la fonction composant.

## Fonctions composants :
Le moyen le plus simple de définir un composant consiste à écrire une fonction JavaScript :

`function Welcome(props) {
return <h1>Bonjour, {props.name}</h1>;
}`

Cette fonction est un composant React valide car elle accepte un seul argument « props » (qui signifie « propriétés ») contenant des données,
et renvoie un élément React. Nous appelons de tels composants des « fonctions composants », car ce sont littéralement des fonctions JavaScript.

## Les méthodes utilisées dans le projet :
- méthode toLowerCase() retourne la chaîne de caractères courante en minuscules.
- méthode toString() renvoie une chaîne de caractères représentant l'objet => est appelée de façon automatique à chaque fois que l'objet doit être représenté sous forme de texte
- méthode indexOf() renvoie le premier indice pour lequel on trouve un élément donné dans un tableau.

- méthode then() renvoie un objet Promise. Elle peut prendre jusqu'à deux arguments qui sont deux fonctions callback à utiliser en cas de complétion ou d'échec de la Promise.
- méthode map() crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant => la fonction callback fournie en argument est exécutée une fois pour chacun des éléments du tableau radios, dans l'ordre du tableau.
- méthode sort() trie les éléments d'un tableau, dans ce même tableau, et renvoie le tableau.
- méthode search() éxecute une recherche dans une chaine de caractères grâce à une expression rationnelle appliquée sur la chaîne courante.

## Les événements utilisés dans le projet :
- L'événement onchange se produit lorsque la valeur d'un élément a été modifiée.


## sans titre :
- event.target.value : il récupère la valeur de l'entrée sur laquelle il a été appelé.
Dans ce cas, c'est notre élément d'entrée, donc tout ce que vous insérez dans votre entrée est accessible via event.target.value
- Event représente un évènement qui se produit dans le DOM.
  - Un évènement peut être déclenché par une action humaine (clic avec la souris, appui sur une touche du clavier) ou généré par des API pour représenter la progression d'une tâche asynchrone.