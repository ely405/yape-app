'use strict';

const validateLetter = (e)=>{
  if(e.which >= 48 && e.which <= 58){
    e.preventDefault();
  }
}
const validateNumber = (e)=>{
  if(e.which< 47 || e.which>58){
    e.preventDefault();
  }
}

const enableButton = (parent, childrenClass, evento, buttonToEnable, name, email, code)=>{
  parent.on(evento, childrenClass, ()=>{
    if(name.val() != '' && email.val() != '' && code.val() != ''){
      console.log('todo lleno');
      buttonToEnable.removeClass('disabled');
      buttonToEnable.removeAttr('disabled');
      state.isValidate = true;
    }
  })
}


// const regexEmail = /^[a-zA-Z0-9_\-\.~]{2,}@[a-z_\-\.~]{2,}\.[a-z]{2,4}$/;
// const activarCheck = _ => {
//   if(nombre.val().length >= 2 && regexEmail.test(email.val()) && password.val().length == 6){
//     cuenta.removeAttr('disabled');
//   }else
//   cuenta.attr('disabled','false');
// };
