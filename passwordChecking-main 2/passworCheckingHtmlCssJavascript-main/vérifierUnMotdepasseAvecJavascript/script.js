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
