const form = document.getElementById('form');
const btn=document.getElementById('btnenviar');
const names=document.getElementById('inputNames');
const age=document.getElementById('inputAge');
const email=document.getElementById('inputEmail');
const tel=document.getElementById('inputTel');
const policy=document.getElementById('checkPolitica');

const objectValid={
    nombres:false,
    edad:false,
    correo:false,
    telefono:false,
    politica:false
};

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(validForm()===1){
        alert('Enviando el formulario');
    }else{
        alert('Error en valores del formulario');
    }
});

const validForm=()=>{
    const values=Object.values(objectValid);
    let response=values.findIndex(e=>e===false);
    return response;
}

nombre.addEventListener('change',(e)=>{
    console.log(e.target.value);
    const namesRegex = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
    objectValid.nombres = e.target.value.match(namesRegex)?true:false;
    console.log(Object.values(objectValid));
});

age.addEventListener('change',function(e){
    const ageRegex=/(^[0-9]{1,2}$)/g;
    if((age.value.match(ageRegex))&&((parseInt(age.value))>17)){
        objectValid.age=true;
    }else{
        objectValid.age=false;
    }
    console.log(Object.values(objectValid));
});

email.addEventListener('change',(e)=>{
    console.log(e.target.value);
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    objectValid.correo = e.target.value.match(emailRegex)?true:false;
    console.log(Object.values(objectValid));
});

telefono.addEventListener('change',(e)=>{
    console.log(e.target.value);
    const emailRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    objectValid.telefono = e.target.value.match(emailRegex)?true:false;
    console.log(Object.values(objectValid));
});

policy.addEventListener('change',function(e){
    objectValid.politica=e.target.checked===true?true:false;
    console.log(Object.values(objectValid));
});