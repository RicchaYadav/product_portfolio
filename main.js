function clearerror(){
    errors = document.getElementsByClassName('formerror');
    for( let item of errors){
     item.innerHTML = "";
    }
   }

   function seterror(id, error){
     // set the error inside the provided if

     element = document.getElementById(id);
     element.getElementsByClassName('formerror')[0].innerHTML = error;
   }
     


   function validateForm(){

     var returnVal = true;
     clearerror();

     let name = document.forms['myform']['name'].value;
     let email = document.forms['myform']['email'].value;
     var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     // if the length is too short then return false
     if(name.length < 5 ){
       seterror("name", "*Length of the name is too short");
       returnVal = false;
     }
     if(email.length > 30 ){
       seterror("email", "*Length of the email is too long");
       returnVal = false;
     }
     if(email.length <5 ){
       seterror("email", "*Length of the email is too short");
       returnVal = false;
     }

     return returnVal;
   }