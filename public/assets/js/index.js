'use strict';

const render = (rootPage)=>{
  rootPage.empty();
  let wrapper = $('<section/>',{'id':'wrapper'});

  if(state.screen == 'welcome'){
    wrapper.append(createWelcome(_=>{render(rootPage)}));
  }else if(state.screen == 'register-number-screen'){
    wrapper.append(createRegisterNumber(_=>{render(rootPage)}));
  }else if(state.screen == 'resend-code-screen'){
    wrapper.append(resendCodeScreen(_=>{render(rootPage)}));
  }else if(state.screen == 'create-user-screen'){
    wrapper.append(createUserAccount(_=>{render(rootPage)}));
  }else if(state.screen == 'congratulations-screen'){
    wrapper.append(createCongratulations(_=>{render(rootPage)}));
  }else if(state.screen == 'register-card-screen'){
    alert('register-card-screen');
    wrapper.append(createRegisterCard(_=>{render(rootPage)}));
  }
  rootPage.append(wrapper);
}

const state = {
  screen: 'welcome',
  isValidate: false,
  user: {},
  card: {}
};

$(_=>{
  const root = $('#root');
  render(root);
  // state.card.number = '0987654321745362';
  $('.carousel').carousel({fullWidth: true});
  // $('.carousel').carousel();
  // $('.carousel.carousel-slider').carousel({fullWidth: true});
})
