const closer = document.querySelector(".close");
const motor = document.querySelector(".motor");
const info = document.querySelector(".informacion");

motor.addEventListener('click', activarInfo);
closer.addEventListener('click', cerrarInfo);

function activarInfo(){
    info.classList.toggle('inactive');
}

/////////////////////////////////////

const motorAcc = document.querySelector (".flechita1");
const infoInter1 = document.querySelector (".infoInterna1")


motorAcc.addEventListener('click', activarInfoInter1);

function activarInfoInter1(){
    infoInter1.classList.toggle('inactive')
}
function cerrarInfo(){
    infoInter1.classList.add('inactive')
    info.classList.add('inactive')
}

/////////////////////////////////

const polea = document.querySelector(".flechita2");
const infoInter2 = document.querySelector(".infoInterna2");

polea.addEventListener('click', activarInfonInter2)

function activarInfonInter2(){
    infoInter2.classList.toggle('inactive')
}

function cerrarInfo(){
    infoInter1.classList.add('inactive')
    info.classList.add('inactive')
    infoInter2.classList.add('inactive')
}


//////////////////////////////////////////////////

const closer1 = document.querySelector(".close1");
const trans = document.querySelector(".transmision");
const infoTrans = document.querySelector(".informacionTrans");
const correa = document.querySelector(".infoCig1");
const conexion = document.querySelector(".infoCig2");
const volante = document.querySelector(".infoCig3");
const ciguenal = document.querySelector(".infoCig4");

trans.addEventListener('click', activarTrans);
closer1.addEventListener('click', cerrarTrans);

function activarTrans(){
    infoTrans.classList.toggle('inactive');
    correa.classList.toggle('inactive');
    conexion.classList.toggle('inactive');
    volante.classList.toggle('inactive');
    ciguenal.classList.toggle('inactive');
}

function cerrarTrans(){
    infoTrans.classList.add('inactive');
    correa.classList.add('inactive');
    conexion.classList.add('inactive');
    volante.classList.add('inactive');
    ciguenal.classList.add('inactive');
}

///////////////////////////////////////////////////////////

const closer2 = document.querySelector(".close2");
const troquel = document.querySelector(".troquel");
const infoTroquel = document.querySelector(".informacionTroquel");
const infoTro1 = document.querySelector(".infotro1");
const infoTro2 = document.querySelector(".infotro2");

troquel.addEventListener('click', activarTroquel);
closer2.addEventListener('click', cerrarTroquel);

function activarTroquel(){
    infoTroquel.classList.toggle('inactive');
    infoTro1.classList.toggle('inactive');
    infoTro2.classList.toggle('inactive');
}

function cerrarTroquel(){
    infoTroquel.classList.add('inactive');
    infoTro1.classList.add('inactive');
    infoTro2.classList.add('inactive');
}

////////////////////////////////////////////////////////////

const closer3 = document.querySelector(".close3");
const sistE = document.querySelector(".sistE");
const infoElec = document.querySelector(".informacionElec");
const infoElec1 = document.querySelector(".infoElec1");
const infoElec2 = document.querySelector(".infoElec2");
const infoElec3 = document.querySelector(".infoElec3");

sistE.addEventListener('click', activarSistE);
closer3.addEventListener('click', cerrarSistE);

function activarSistE(){
    infoElec.classList.toggle('inactive');
    infoElec1.classList.toggle('inactive');
    infoElec2.classList.toggle('inactive');
    infoElec3.classList.toggle('inactive');
}


function cerrarSistE(){
    infoElec.classList.add('inactive');
    infoElec1.classList.add('inactive');
    infoElec2.classList.add('inactive');
    infoElec3.classList.add('inactive');
}