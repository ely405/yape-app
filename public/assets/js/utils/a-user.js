'use strict';

const registerNumber = (user)=>{
  return new Promise((resolve, reject)=>{
    $.post('api/registerNumber/', user, (response, status, error)=>{
      console.log(response);
      console.log(status);
      console.log(error);
      if(error.status != 200){
        reject(new error('Error al guardar número de celular'));
      }else if(response.success == false){
        console.log(response);
        resolve(response);
      }else{
        resolve(response);
      }
    });
  });
}

const resendNewCode = (cellphone)=>{
  $.post('api/resendCode/', cellphone, (response, status)=>{
    console.log(response);
    console.log('status ' + status);
    state.user.code = response.data;
    console.log(state.user.code);
  })
}

const createUser = (user)=>{
  return new Promise((resolve, reject)=>{
    console.log(resolve);
    console.log(reject);
    $.post('api/createUser/', user, (response, status, error)=>{
      console.log(response);
      console.log(error);
      if(error.status != 200){
        reject(new Error('Hubo un error al crear usuario.'));
      }else if(response.success == false){
        resolve(response);
      }else{
        resolve(response);
      }
    });
  });
}
