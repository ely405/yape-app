'use strict';

const createRegisterCard = (updatePageFunction)=>{
  state.isValidate = false;
  console.log(state.screen);
  let registerContainer = $('<div/>',{'class':'row valign-wrapper flex-column container h-100vh'});
  let imgBcpCard = $('<img/>',{'src':'assets/img/icons/bcp-logo.png', 'alt':'Bcp card', 'class':'col s6 m-auto'});
  let titleCard = $('<h5/>',{'class':'center'}).html('Registra tu tarjeta de débito BCP');
  let descCard = $('<h6/>',{'class':'center'}).html('Por ahora solo aceptamos cuentas de ahorro y/o corriente en soles.');

  let formCard = $('<form/>',{'class':'col m-auto s11 valign-wrapper flex-column'});
  let inpCard = $('<input/>',{'type':'number', 'class':'validate p-l-126 col s12 bg-icon bg-no-repeat center to-enable', 'required':'required'});
  let scanCard = $('<a/>',{'href':'#', 'class':'center'}).html('Escanear esta tarjeta');
  let iconCard = $('<i/>',{'id':'scan', 'class':'bg-contain bg-no-repeat'});
  scanCard.prepend(iconCard);
  let dateContain = $('<div/>',{'class':'row d-flex'});
  let lblDate = $('<label/>',{'class':'col s6 valign-wrapper'}).html('Fecha de vencimiento');
  let inpMonth = $('<input/>',{'class':'col s6 datepicker valign-wrapper to-enable', 'type':'number', 'required':'required', 'id':'inp-month', 'min':'1', 'max':'12'});
  let inpYear = $('<input/>',{'class':'col s6 datepicker valign-wrapper to-enable', 'type':'number', 'required':'required', 'id':'inp-year', 'min':'17', 'max':'24'});
  dateContain.append(lblDate, inpMonth, inpYear);
  let btnCreateAcc = $('<button/>',{'type':'submit', 'class':'waves-effect btn disabled', 'id':'btn-create', 'disabled':'disabled'}).html('CREAR CUENTA');
  formCard.append(inpCard, scanCard, dateContain, btnCreateAcc);
  registerContainer.append(imgBcpCard, titleCard, descCard, formCard);

  enableButton(formCard, '.to-enable', 'change', btnCreateAcc, inpCard, inpMonth, inpYear);

  btnCreateAcc.click(()=>{
    if(state.isValidate == true){
      state.screen = 'register-card-pass-screen';
      state.card.userId = state.user.phone;
      
    }
    reRender(wrapperContainer, updatePageFunction, createCardPassword(updatePageFunction, wrapperContainer));
  })
  console.log(state.isValidate);
  return registerContainer;
}
