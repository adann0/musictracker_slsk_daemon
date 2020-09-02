# slsk

Une app nodeJS pour appeler slsk-client via la ligne de commande et faire des recherches ou télécharger des musiques.

Le fichier binaire est utilisé dans musictracker.

# macOS

## Install

Le package requiert npm pour être utilisé, sur macOS on peut l'installer avec :
	
	$ brew install npm

Pour freeze le package on va utiliser pkg :

	$ npm install -g pkg

Ensuite dans le dossier du projet :

	$ make dep
	$ make

Pour nettoyer le dossier :

	$ make clean

# Usage

	$ ./slsk search <id> <password> "under black helmet mute"
	$ ./slsk download <id> <password> <request> <file> <user> <size> <full_out_path>

# Windows

## Install

___NOTE : A partir du téléchargement depuis npm de slsk-client, le fichier compilé retournera une erreur car slsk-client essaye de créer un répertoire dans /tmp/slsk alors que l'on est sous Windows. Pour contourner l'erreur, modifier le fichier dans node_modules/slsk-client/lib/index, à la ligne de l'appel de la fonction mkdirSync dans module.exports., supprimer l'appel de la fonction.___

Sur Windows on peut installer npm avec Node.js sur le site officiel.

Pour freeze le package on va utiliser pkg :

	$ npm install -g pkg

Ensuite on peut télécharger le repo de musictracker_slsk_daemon sur Github et utiiser le script Make.cmd pour build l'app.

Elle doit être upload sur Github dans le repo et le lien dans settings() dans musictracker doit être changé lors d'un update.
