
# PokeShop

Projet permettant à Pierre, fan de cartes pokémon, de:
- consulter des cartes pokémon
- filtrer les cartes "holo rare"
- ajouter une ou plusieurs cartes à un panier
- retirer une carte du panier (réduire la quantité sélectionnée ou retirer complètement la carte)
- consulter le prix unitaire d'une carte, et le prix total de son panier

 ## Technos

- Angular 11.2.14
- ngrx 11.1.1

## Problèmes rencontrés

- J'ai découvert l'archi redux avec cet exercice, j'ai consommé du temps à comprendre l'implémentation de celle-ci => je tenais à montrer que je sais m'approprier une nouvelle architecture.
- Lors de l'implémentation j'ai eu 2 problèmes: 
	- J'avais un angular CLI 10.x.x, et j'ai installé ngrx 12.x.x => versions incompatibles
	- Javais un problème de typage dans la gestion de mes actions / reducer => je ne suis pas sûr de la cause (j'ai par exemple lu que beaucoup de gens avaient ce problème en passant de rxjs 6.2 à 6.3 car breaking changes sur les Observables, or je suis en 6.6), mais j'ai "résolu" le problème en désactivant le typage strict dans mon tsconfig

## Remarques

- J'ai un peu utilisé bootstrap pour montrer que je ne suis pas étranger à cette librairie, mais étant donné la petite taille du projet j'aurais en temps normal fait le css from scratch (selon moi importer une librairie pour en utiliser 0.001% n'est pas une bonne chose)

## Pour la suite

- Je n'ai pas fait de TU 
	- voulez-vous que j'en ajoute ?
- Je ne me suis pas attardé sur le style 
	-  voulez-vous que je l'améliore ? (style + une modale pour voir une carte par exemple)
- Je ne me suis pas attardé sur la récupération des cartes: j'ai utilisé l'API pour un get basique, et un filtre basique 
	-  voulez-vous que je l'améliore ? (plus de filtres, barre de recherche, pagination pour parcourir l'ensemble des cartes)

