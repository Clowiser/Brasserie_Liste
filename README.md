# Projet The Beer Factory 🍺🌈
Consignes - prototyper le projet :
"The Beer Factory"
- Créer le frontend d'un moteur de recherche en utilisant React et https://www.openbrewerydb.org :

    - Pouvoir rechercher des brasseries à l'aide d'une entrée,
    - Lorsque l'utilisateur clique sur « rechercher », l'application devra interroger l'API
      et afficher les résultats dans une liste,
    - L'API a de nombreuses options, ne pas hésiter à implémenter d'autres fonctionnalité (recherche par catégories…),
    - Être créatif et ajouter des fonctionnalités supplémentaires qu'un utilisateur pourrait trouver utiles,
    - S'inspirer, mais ne pas CTRL+C/CTRL+V,
    - Interface aussi raffinée que possible,
    - Front-end sur une application d'une seule page avec un unique 'index.html' comportant des liens vers des JS/CSS/etc externes.

## Compte-rendu :

### Eléments non terminées :

- Composant enfant Brewery.js - par manque de temps et que j'ai passé du temps à certaines étapes du code (réflexion, test, recherche, test).
    - Vous pouvez retrouver le prototype visuel du rendu concernant ce composant via le lien Figma https://www.figma.com/file/nMcyL6AVBWBN9VOVMYneX9/Affichage-au-clic-d'un-titre-de-brasserie---BreweriesList?node-id=0%3A1
      ou une capture image dans le dossier assets/prototype.

- Test d'intégration avec React Testing Library pour tester les composants

### Eléments non réalisés :

- Tests automatisés

### Eléments oubliés :

- En fin de production, j'ai oublié de faire la responsive...

### Problèmes rencontrés :

- Difficultés rencontrées dues à la découverte du Framework React,
  - Solution : beaucoup de recherches,
- Difficultés d'assimilation de certaines informations,
  - Solution : beaucoup de recherches,
- Difficultés de construction du code,
- Solution : beaucoup de recherches,

- Après des tentatives, je n'ai pas réussi à centrer les images des drapeaux des pays par rapport aux noms des pays.
    - Je pense que cela est dû au fait que les tailles des noms des pays sont tous différents, empêchant le centrage précis.
      Cependant, j'imagine qu'il existe bien un moyen, mais je ne l'ai pas trouvé.

- Un temps de chargement assez long, comparé à la rapidité de réponse que l'on a aujourd'hui. 
  - Exemple : lors du clique sur le bouton "clear"

### Vulnérabilité :

- Vulnérabilité XSS : permet à l'attaquant d'injecter des scripts, exécutés côté-client, au travers du site web pour viser le navigateur web.

### Points d'amélioration constatés :

- La recherche, dans la barre de recherche, s'effectue uniquement par ville, car cela me semblait être un meilleur élément de recherche. Je m'explique :
  1. La recherche débute, si l'utilisateur le souhaite, par le choix du pays en sélectionnant l'un d'entre eux via les inputs radios,
  2. Par la suite, il affine sa recherche par ville via la barre de recherche,
  3. Enfin, il déroule la liste pour trouver sa brasserie, triée par ordre numérique puis alphabétique, glisse son curseur sur le titre de la brasserie recherchée pour obtenir un affichage des informations complémentaires telles que l'adresse postale, le site web ou encore le numéro de téléphone.

Cependant, entrer directement le nom de la brasserie concernée lui éviterai le déroulement infini de la barre de défilement et d'accéder directement à la brasserie recherchée.
C'est donc un élément bien pensé, mais non réalisé dans ce projet (par manque de temps).

- L'UX peut-être amélioré. En effet, pour l'affichage des résultats, la liste se trouve en dessous et l'utilisateur doit descendre le scroll pour avoir un affichage plus agréable à lire. 

### Considération du code prêt pour la production

- En soi, le projet est fonctionnel, il répond aux deux consignes demandées, soit :
    - Pouvoir rechercher des brasseries à l'aide d'une entrée.
    - Lorsque l'utilisateur clique sur « rechercher », l'application devra interroger l'API et afficher les résultats dans une liste.

Mais, à l'heure actuelle, je ne parviens pas à estimer si mon code est prêt pour la production. Je n'ai pas encore le recul sur ce sujet.

### Conclusion :
Je suis bien consciente que mon code n'est pas de qualité, j'ai vraiment apprécié relever le défi qui m'a permis d'apprendre de nouvelles connaissances comme la découverte de React et son fonctionnement.

Je vous remercie de m'avoir donné la possibilité de vous montrer mes connaissances actuelles, je vous remercie de votre indulgence à mon égard, dû à mon niveau. 

Je reste donc dans l'attente de votre retour,

Bien cordialement,