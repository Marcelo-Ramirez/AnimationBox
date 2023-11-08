const container = document.getElementById('container');
container.style.backgroundColor = 'black';
container.style.width = '300px';
container.style.height = '300px';
container.style.position = 'relative';

const box = document.getElementById('box');
box.style.backgroundColor = 'white';
box.style.width = '80px';
box.style.height = '80px';
box.style.position = 'absolute';

let x = 0;
let y = 0;
let velocidad = 10;

let intervalID;
let intervalIDreverse;
function moverHorario(){
    intervalID = setInterval(() => {
        if(x < 220 && y === 0){
            x+=velocidad
            box.style.left = x + 'px'
        }else if(x === 220 && y < 220){
            y+=velocidad
            box.style.top = y + 'px'
        }else if(x > 0 && y === 220){
            x-=velocidad
            box.style.left = x + 'px'
        }else if(x === 0 && y > 0){
            y-=velocidad
            box.style.top = y + 'px'
        }
    }, 10);
}

function moverAntiHorario(){
    intervalIDreverse = setInterval(() => {
        if(x === 0 && y < 220){
            y+=velocidad
            box.style.top = y + 'px'
        }else if(x < 220 && y === 220){
            x+=velocidad
            box.style.left = x + 'px'
        }else if(x === 220 && y > 0){
            y-=velocidad
            box.style.top = y + 'px'
        }else if(x > 0 && y === 0){
            x-=velocidad
            box.style.left = x + 'px'
        }
    }, 10);
}

function pararlacaja(){
    clearInterval(intervalID)
    clearInterval(intervalIDreverse)
}

const botonHorario = document.getElementById('botonHorario');
botonHorario.addEventListener('mousedown', moverHorario)
botonHorario.addEventListener('mouseup', pararlacaja)

const botonAntiHorario = document.getElementById('botonAntiHorario')
botonAntiHorario.addEventListener('mousedown', moverAntiHorario)
botonAntiHorario.addEventListener('mouseup', pararlacaja)
//Comentario