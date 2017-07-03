'use strict';

const itemCarousel = (url, alt, title, paragraph)=>{
  let itemContainer = $('<div/>',{'class':'carousel-item center white'});
  let carouselImg = $('<img/>',{'src':url, 'alt':alt, 'class':'col offset-s3 s6'});
  let carouselTitle = $('<h2/>',{'class':'col s12'}).html(title);
  let carouselPar = $('<h5/>',{'class':'col s12'}).html(paragraph);
  itemContainer.append(carouselImg, carouselTitle, carouselPar);
  return itemContainer;
}

const createWelcome = (updatePageFunction)=>{
  console.log(state.screen);
  let welcomeWrapper = $('<section/>',{'class':'row valign-wrapper flex-column space-around h-95vh container'});

  let carouselContainer = $('<div/>',{'class':'col s12 m5 l6 carousel carousel-slider center m-auto', 'data-indicators':'true'});

  let carouselItem1 = itemCarousel('assets/img/icons/icon-people.png', 'People', 'Paga a tus amigos', 'Paga a quien quieras desde donde quieras, sin usar efectivo.');
  let carouselItem2 = itemCarousel('assets/img/icons/happy-person.png', 'Happy person', 'Sin número de cuenta', 'Elige a quién pagar desde tu lista de contactos.');
  let carouselItem3 = itemCarousel('assets/img/icons/group-people.png', 'Group people', 'Gratis y seguro', 'La transferencia es inmediata y gratuita de una cuenta a otra.');
  carouselContainer.append(carouselItem1, carouselItem2, carouselItem3);

  let buttonContainer = $('<div/>',{'class':'col s12 row m-auto'});
  let btnRegister = $('<button/>',{'type':'button', 'class':'waves-effect amber darken-1 btn col s12'}).html('Regístrame');

  welcomeWrapper.append(carouselContainer, buttonContainer.append(btnRegister));

  btnRegister.click(()=>{
    state.screen = 'register-number-screen';
    // reRender(wrapperContainer, updatePageFunction, createRegisterNumber(updatePageFunction, wrapperContainer), 'registerNumberScreen');
    updatePageFunction();
  })
  return welcomeWrapper;
}
