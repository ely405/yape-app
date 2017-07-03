'use strict';

const resendCodeScreen = (updatePageFunction)=>{
  state.isValidate = false;
  console.log(state.screen);
  console.log(state.user);

  let resendWrapper = $('<section/>',{'class':'row valign-wrapper flex-column container bg-no-repeat h-95vh flex-center', 'id':'message-container'});
  let resendTitle = $('<h4/>',{'class':'center'}).html('Ahora ingresa tu código');
  let resendPar = $('<p/>',{'class':'center'}).html('Enviamos un código de validación al número');
  let phoneToSend = $('<strong/>').html(state.user.phone);
  resendPar.append(phoneToSend);

  let inpCode = $('<input/>',{'id':'inp-code', 'type':'text', 'class':'validate p-l-126 col s11 bg-contain bg-no-repeat', 'placeholder':'- - - - -'});
  let retryPara = $('<p/>',{'class':'center'}).html('Reintentar en ');
  let clockIcon = $('<i/>',{'id':'clock-icon','class':'bg-contain bg-no-repeat'});
  let countDown = $('<span/>',{'id':'count-down'});
  let message = $('<span/>',{'id':'span-message'})
  retryPara.append(clockIcon, countDown);
  resendWrapper.append(resendTitle, resendPar, inpCode, retryPara, message);

  countDown.timer({
    countdown: true,
    duration: '21s',
    callback: ()=>{
      resendNewCode({"phone": state.user.phone});
      countDown.timer('remove');
    },
    format: '%s s'
  });

  inpCode.on('keyup', (e)=>{
    console.log($(e.target).val());
    console.log(state.user.code);
    if($(e.target).val() == state.user.code.toString()){
      state.isValidate = true;
      state.screen = 'create-user-screen';
      updatePageFunction();
      console.log(state.isValidate);
    }
  });

  return resendWrapper;

}
