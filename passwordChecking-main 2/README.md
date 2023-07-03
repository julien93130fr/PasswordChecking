# passwordChecking
#####HTML-CSS-Javascript Le mot de passe doit contenir les éléments suivants,Une lettre minuscule,une lettre majuscule,un chiffre,8 caractères minimum

Pour le code javascript:

```javascript
// Définir les variables
let  myInput = document.getElementById('psw');
let  letter  = document.getElementById('letter');
let  capital = document.getElementById('capital');
let  number  = document.getElementById('number');
let length   = document.getElementById('lenght');

//Lorsque l' utilisateur clique sur le champ mot de passe , afficher la boite message
myInput.onfocus = function()
{ 
    document.getElementById("message").style.display = "block"
      
}

// lorsque l' utilisateur clique en dehors du champs mot de passe, masque la boite message
myInput.onblur = function()
{ 
    document.getElementById("message").style.display = "none"
}

//lorsque l' utilisateur commence a taper quelque chose dans le champ mot de passe
myInput.onkeyup= function()
{ 
    let lowerCaseLetters = /[a-z]/g
    if(myInput.value.match(lowerCaseLetters)) {
        //si le mot de passe contient une lettre minuscule enlever la classe" invalid et ajouter la classe valid
       letter.classList.remove('invalid');
       letter.classList.add('valid');
    }else{
        //si non , enlever la classe "valid" et ajouter la class " invalid"
        letter.classList.remove('valid')
        letter.classList.add('invalid')
    }
         // valider les lettres majuscules
        var upperCaseLetters = /[A-Z]/g
        if (myInput.value.match(upperCaseLetters)) {
            //si le mot de passe contient une lettre majuscule enlever 
            //la classe" invalid et ajouter la classe valid
           capital.classList.remove('invalid');
           capital.classList.add('valid');
        }else{
            //si non , enlever la classe "valid" et ajouter
            // la class " invalid"
            capital.classList.remove('valid')
            capital.classList.add('invalid')
        }
      


 //valider les nombres
  var numbers = /[0-9]/g
    if (myInput.value.match(numbers)) {
        //si le mot de passe contient un nombre  enlever la classe" invalid et ajouter la classe valid
       number.classList.remove('invalid');
       number.classList.add('valid');
    }else{
        //si non , enlever la classe "valid" et ajouter la class " invalid"
        number.classList.remove('valid');
        number.classList.add('invalid');
    
    }

    //VALIDER LA LONGUEUR
    if (myInput.value.length >= 8 ) {
        //si le mot de passe contient 8 caractères minimum
        //enlever la class "invalid et ajouter la class valid"
        length.classList.remove('invalid');
        length.classList.add('valid');
    }else{
        //si non , enlever la classe "valid" et ajouter la class " invalid"
        length.classList.remove('valid');
        length.classList.add('invalid');
    }
}
```
Ce code effectue les actions suivantes :
Déclare plusieurs variables en utilisant let pour les éléments HTML avec les identifiants spécifiés :
        myInput pour l'élément avec l'identifiant 'psw'.
        letter pour l'élément avec l'identifiant 'letter'.
        capital pour l'élément avec l'identifiant 'capital'.
        number pour l'élément avec l'identifiant 'number'.
        length pour l'élément avec l'identifiant 'lenght'.
Ajoute un gestionnaire d'événement lorsqu'un utilisateur clique sur le champ de mot de passe (myInput) en utilisant onfocus. Lorsque cela se produit, la boîte de message est affichée en modifiant le style de l'élément avec l'identifiant "message" pour le rendre visible.
Ajoute un gestionnaire d'événement lorsque l'utilisateur clique en dehors du champ de mot de passe (myInput) en utilisant onblur. Lorsque cela se produit, la boîte de message est masquée en modifiant le style de l'élément avec l'identifiant "message" pour le rendre invisible.
Ajoute un gestionnaire d'événement lorsqu'un utilisateur commence à taper quelque chose dans le champ de mot de passe (myInput) en utilisant onkeyup. Lorsque cela se produit, plusieurs vérifications sont effectuées :
Vérifie si le mot de passe contient au moins une lettre minuscule en utilisant une expression régulière lowerCaseLetters. Si c'est le cas, la classe 'invalid' est supprimée de l'élément letter et la classe 'valid' lui est ajoutée. Sinon, la classe 'valid' est supprimée et la classe 'invalid' lui est ajoutée.
Vérifie si le mot de passe contient au moins une lettre majuscule en utilisant une expression régulière upperCaseLetters. Si c'est le cas, la classe 'invalid' est supprimée de l'élément capital et la classe 'valid' lui est ajoutée. Sinon, la classe 'valid' est supprimée et la classe 'invalid' lui est ajoutée.
Vérifie si le mot de passe contient au moins un chiffre en utilisant une expression régulière numbers. Si c'est le cas, la classe 'invalid' est supprimée de l'élément number et la classe 'valid' lui est ajoutée. Sinon, la classe 'valid' est supprimée et la classe 'invalid' lui est ajoutée.
Vérifie si la longueur du mot de passe est d'au moins 8 caractères. Si c'est le cas, la classe 'invalid' est supprimée de l'élément length et la classe 'valid' lui est ajoutée. Sinon, la classe 'valid' est supprimée et la classe 'invalid' lui est ajoutée.
En résumé, ce code permet de fournir des indications visuelles à l'utilisateur sur la validité du mot de passe qu'il saisit en utilisant des classes CSS ('valid' et 'invalid') pour styliser les éléments correspondants (letter, capital, number, length). 

