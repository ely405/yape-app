'use strict';

const createRegisterNumber = (updatePageFunction)=>{
  console.log(state.screen);
  let registerWrapper = $('<section/>',{'class':'valign-wrapper flex-column space-around h-95vh container'});
  let registerContainer = $('<div/>',{'class':'row valign-wrapper flex-column', 'id':'register-container'});
  let phoneImg = $('<img/>',{'src':'assets/img/icons/phone.png', 'alt':'Phone', 'class':'col s6 m-auto'});
  let title = $('<h5/>',{'class':'center'}).html('Para comenzar validemos tu número');
  let paragraphSMS = $('<p/>').html('Recibirás un SMS con un código de validación');

  let inpPhoneContainer = $('<div/>',{'class':'input-field row'});
  let imgPhoneNumber = $('<img/>',{'src':'assets/img/icons/phoneandnumber.png', 'alt':'Phone and number', 'class':'col s4 select-label h-60pr'});
  let inpPhone = $('<input/>',{'id':'phone-number', 'type':'text', 'class':'validate p-l-126 col s12 to-enable'});
  inpPhoneContainer.append(imgPhoneNumber, inpPhone);

  let inpCheckContainer = $('<div/>',{'class':'input-field'});
  let checkTerms = $('<input/>',{'type':'checkbox', 'class':'filled-in to-enable', 'id':'check-terms'});
  let lblTerms = $('<label/>',{'for':'check-terms'}).html('Acepto los ');
  let hrefTerms = $('<a/>',{'href':'#'}).html('Términos y condiciones');
  inpCheckContainer.append(checkTerms, lblTerms.append(hrefTerms));

  registerContainer.append(phoneImg, title, paragraphSMS, inpPhoneContainer, inpCheckContainer);

  let btnContainer = $('<div/>',{'class':'input-field'});
  let btnContinue = $('<button/>',{'type':'button', 'class':'waves-effect btn disabled', 'id':'btn-continue', 'disabled':'disabled'}).html('Continuar');
  let message = $('<p/>');
  registerWrapper.append(registerContainer, btnContainer.append(btnContinue, message));

  registerContainer.on('change', '.to-enable', (e)=>{
    if(inpPhone.val().length == 9 && checkTerms.is(':checked')){
      state.isValidate == checkTerms.is(':checked');
      btnContinue.removeAttr('disabled');
      btnContinue.removeClass('disabled');
    }
  });

    btnContinue.click(()=>{
      // if(state.isValidate == checkTerms.is(':checked')){
        const userCreated = {
          "phone": inpPhone.val(),
          "terms": checkTerms.is(':checked')
        }
      registerNumber(userCreated).then((response)=>{
        console.log(response);
        if(response.data == null){
          message.html(response.message);
        }else{
          state.screen = 'resend-code-screen';
          state.user.phone = response.data.phone;
          state.user.code = response.data.code;
          updatePageFunction();
          console.log(state.screen);
          console.log(state.user.phone);
          console.log(state.user.code);
        }
      });
    // }
    });

    return registerWrapper;
  }
