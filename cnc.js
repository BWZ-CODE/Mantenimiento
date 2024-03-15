const cerrar = document.querySelector('.close1');
const btnMotor = document.querySelector('.primer')
const infMotor = document. querySelector('.contmotor')
const infSecMotor = document.querySelector('.infoSec1')
const fondo = document.querySelector('.container')


btnMotor.addEventListener('click', abirInfoMotor);
cerrar.addEventListener('click', cerrarInfoMotor);

function abirInfoMotor(){
    infMotor.classList.toggle('inactive')
    infSecMotor.classList.toggle('inactive')
    fondo.classList.add('opaco')
}

function cerrarInfoMotor(){
    infMotor.classList.add('inactive')
    infSecMotor.classList.add('inactive')
    fondo.classList.toggle('opaco')
}
///////////////////////////////////////////////

const cerrar2 = document.querySelector('.close2');
const btnCapHusillo = document.querySelector('.segundo')
const infCapHusillo = document. querySelector('.contCapHusillo')
const infSecCapHusillo = document.querySelector('.infoSec2')
const fondo1 = document.querySelector('.container')


btnCapHusillo.addEventListener('click', abirInfoCapHusillo);
cerrar2.addEventListener('click', cerrarInfoCapHusillo);

function abirInfoCapHusillo(){
    infCapHusillo.classList.toggle('inactive')
    infSecCapHusillo.classList.toggle('inactive')
    fondo1.classList.add('opaco')
}

function cerrarInfoCapHusillo(){
    infCapHusillo.classList.add('inactive')
    infSecCapHusillo.classList.add('inactive')
    fondo1.classList.toggle('opaco')
}

/////////////////////////////////////

const cerrar3 = document.querySelector('.close3');
const btnEjes = document.querySelector('.tercero')
const infEjes = document. querySelector('.ContEjes')
const infSecEjes = document.querySelector('.infoSec3')
const fondo2 = document.querySelector('.container')


btnEjes.addEventListener('click', abirInfoEjes);
cerrar3.addEventListener('click', cerrarInfoEjes);

function abirInfoEjes(){
    infEjes.classList.toggle('inactive')
    infSecEjes.classList.toggle('inactive')
    fondo2.classList.add('opaco')
}

function cerrarInfoEjes(){
    infEjes.classList.add('inactive')
    infSecEjes.classList.add('inactive')
    fondo2.classList.toggle('opaco')
}

////////////////////////////////////////

const cerrar4 = document.querySelector('.close4');
const btnsistATC = document.querySelector('.cuarto')
const infsistATC = document. querySelector('.contsistATC')
const infSecsistATC = document.querySelector('.infoSec4')
const fondo3 = document.querySelector('.container')


btnsistATC.addEventListener('click', abirInfosistATC);
cerrar4.addEventListener('click', cerrarInfosistATC);

function abirInfosistATC(){
    infsistATC.classList.toggle('inactive')
    infSecsistATC.classList.toggle('inactive')
    fondo3.classList.add('opaco')
}

function cerrarInfosistATC(){
    infsistATC.classList.add('inactive')
    infSecsistATC.classList.add('inactive')
    fondo3.classList.toggle('opaco')
}

/////////////////////////////////////////

const cerrar5 = document.querySelector('.close5');
const btnsistRef = document.querySelector('.quinto')
const infsistRef = document. querySelector('.contSistRef')
const infSecsistRef = document.querySelector('.infoSec5')
const fondo4 = document.querySelector('.container')


btnsistRef.addEventListener('click', abirInfosistRef);
cerrar5.addEventListener('click', cerrarInfosistRef);

function abirInfosistRef(){
    infsistRef.classList.toggle('inactive')
    infSecsistRef.classList.toggle('inactive')
    fondo4.classList.add('opaco')
}

function cerrarInfosistRef(){
    infsistRef.classList.add('inactive')
    infSecsistRef.classList.add('inactive')
    fondo4.classList.toggle('opaco')
}

//////////////////////////////////////////////////

const cerrar6 = document.querySelector('.close6');
const btnsistLubr = document.querySelector('.sexto')
const infsistLubr= document. querySelector('.contSistLub')
const fondo5 = document.querySelector('.container')


btnsistLubr.addEventListener('click', abirInfosistLubr);
cerrar6.addEventListener('click', cerrarInfosistLubr);

function abirInfosistLubr(){
    infsistLubr.classList.toggle('inactive')
    fondo5.classList.add('opaco')
}

function cerrarInfosistLubr(){
    infsistLubr.classList.add('inactive')
    fondo5.classList.toggle('opaco')
}
