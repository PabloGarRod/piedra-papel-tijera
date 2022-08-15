
//Mediante esta función hacemos que la máquina elija un número aleatorio del 1 al 3
//Después a cada numero le asignamos un string "piedra", "papel" y "tijera"
//Finalmente la función retorna el string asignado aleatoriamente

function eleccionMaquina(){
    var num = Math.floor((Math.random() * (3)) + 1);
    switch(num){
        case 1: 
            return "piedra";
        case 2:
            return "papel";
        case 3:
            return "tijera";
    }
}

function jugar(eleccionUsuario){
    let maquina = eleccionMaquina();
    let esGanador;
    let empate;

    if(eleccionUsuario=='piedra'){
        if(maquina=='piedra'){
            empate = true;
        }else if(maquina=='papel'){
            empate=false;
            esGanador=false;
        }else{
            empate=false;
            esGanador=true;
        }
    }else if(eleccionUsuario=='papel'){
        if(maquina=='piedra'){
            empate = false;
            esGanador = true;
        }else if(maquina=='papel'){
            empate=true;
        }else{
            empate=false;
            esGanador=false;
        }
    }else{
        if(maquina=='piedra'){
            empate = false;
            esGanador = false;
        }else if(maquina=='papel'){
            empate=false;
            esGanador = true
        }else{
            empate=true;
        }
    }


    const result = document.getElementById('resultado')
    result.style.backgroundColor = ('aqua')
    result.style.borderRadius = "25%"
    const cabeceraJugador = document.getElementById('cabecera-jugador')
    cabeceraJugador.innerText = `Has elegido:\n ${eleccionUsuario}`
    const iconoJugador = document.getElementById('img-jugador')
    //Esta linea es para darle estilos css
    iconoJugador.className = "icono_" 
    iconoJugador.src = `${eleccionUsuario}.png`
    const cabeceraMaquina = document.getElementById('cabecera-maquina');
    cabeceraMaquina.innerText = `La máquina:\n ${maquina}.`
    const iconoMaquina = document.getElementById('img-maquina')
    iconoMaquina.className = "icono_"
    iconoMaquina.src = `${maquina}.png`

    const ganador = document.getElementById('ganador-final')

    if(empate){
        ganador.innerText ='Habéis empatado'
    }else if(esGanador){
        ganador.innerText = 'Enhorabuena! Has ganado.'
    }else{
        ganador.innerText = 'Lo siento, has perdido. :('
    }

   
    


}
