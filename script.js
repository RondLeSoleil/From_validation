var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError  = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');


function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0){
        nameError.innerHTML = "Nom requis";
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Ecrivez votre nom en entier";
        return false;
    }
    nameError.innerHTML='valid';
    return true;
}
function validatePhone(){
    var phone = document.getElementById('contact-phone').value;

    if(phone.length == 0){
        phoneError.innerHTML = "Numéro de tel obligatoire";
        return false;
    }
   if(phone.lenght !== 10){
        phoneError.innerHTML = "il fuat 10 chiffre";
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML ="Rien que des chiffres";
        return false;
    }

    phoneError.innerHTML= "true";
    return true;
}

function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.lenght == 0 ){
        emailError.innerHTML ="Email requis";
        return false;
    }
    if(!email('/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/') ){
        emailError.innerHTML ="Email requis";
        return false;
    }
}
function validateMessage(){
    var message = document.getElementById('contact-message').value;
    var required = 15;
    var left = required - message.length;

    if(left>0){
        messageError.innerHTML = left +' plus de lettres requis';
        return false;
    }
    messageError.innerHTML = "vrais ";
    return true;
}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display="block"
        submitError.innerHTML="merci de fixer l'erreur";
        setTimeout(function(){submitError.style.display="none"},3000);
        return false;
   };

    }
     