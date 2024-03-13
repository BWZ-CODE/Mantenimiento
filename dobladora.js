const cerrar = document.querySelector('.close1');
const btnGrupo = document.querySelector('.primer')
const infGrupo = document. querySelector('.contGrupoH')
const infSecGrupo = document.querySelector('.infoSec1')
const fondo = document.querySelector('.container')


btnGrupo.addEventListener('click', abirInfoGrupo);
cerrar.addEventListener('click', cerrarInfoGrupo);

function abirInfoGrupo(){
    infGrupo.classList.toggle('inactive')
    infSecGrupo.classList.toggle('inactive')
    fondo.classList.add('opaco')
}

function cerrarInfoGrupo(){
    infGrupo.classList.add('inactive')
    infSecGrupo.classList.add('inactive')
    fondo.classList.toggle('opaco')
}
///////////////////////////////////////////////

const cerrar2 = document.querySelector('.close2');
const btnCilin = document.querySelector('.segundo')
const infCilin = document. querySelector('.contCilinSub')
const infSecCilin = document.querySelector('.infoSec2')
const fondo1 = document.querySelector('.container')


btnCilin.addEventListener('click', abirInfoCilin);
cerrar2.addEventListener('click', cerrarInfoCilin);

function abirInfoCilin(){
    infCilin.classList.toggle('inactive')
    infSecCilin.classList.toggle('inactive')
    fondo1.classList.add('opaco')
}

function cerrarInfoCilin(){
    infCilin.classList.add('inactive')
    infSecCilin.classList.add('inactive')
    fondo1.classList.toggle('opaco')
}

/////////////////////////////////////

const cerrar3 = document.querySelector('.close3');
const btnCilinP = document.querySelector('.tercero')
const infCilinP = document. querySelector('.ContCilinPrinc')
const infSecCilinP = document.querySelector('.infoSec3')
const fondo2 = document.querySelector('.container')


btnCilinP.addEventListener('click', abirInfoCilinP);
cerrar3.addEventListener('click', cerrarInfoCilinP);

function abirInfoCilinP(){
    infCilinP.classList.toggle('inactive')
    infSecCilinP.classList.toggle('inactive')
    fondo2.classList.add('opaco')
}

function cerrarInfoCilinP(){
    infCilinP.classList.add('inactive')
    infSecCilinP.classList.add('inactive')
    fondo2.classList.toggle('opaco')
}

////////////////////////////////////////

const cerrar4 = document.querySelector('.close4');
const btnTope = document.querySelector('.cuarto')
const inftope = document. querySelector('.contTope')
const infSecTope = document.querySelector('.infoSec4')
const fondo3 = document.querySelector('.container')


btnTope.addEventListener('click', abirInfoTope);
cerrar4.addEventListener('click', cerrarInfoTope);

function abirInfoTope(){
    inftope.classList.toggle('inactive')
    infSecTope.classList.toggle('inactive')
    fondo3.classList.add('opaco')
}

function cerrarInfoTope(){
    inftope.classList.add('inactive')
    infSecTope.classList.add('inactive')
    fondo3.classList.toggle('opaco')
}

/////////////////////////////////////////

const cerrar5 = document.querySelector('.close5');
const btnArm = document.querySelector('.quinto')
const infArm = document. querySelector('.contArmElec')
const infSecArm = document.querySelector('.infoSec5')
const fondo4 = document.querySelector('.container')


btnArm.addEventListener('click', abirInfoArm);
cerrar5.addEventListener('click', cerrarInfoArm);

function abirInfoArm(){
    infArm.classList.toggle('inactive')
    infSecArm.classList.toggle('inactive')
    fondo4.classList.add('opaco')
}

function cerrarInfoArm(){
    infArm.classList.add('inactive')
    infSecArm.classList.add('inactive')
    fondo4.classList.toggle('opaco')
}
