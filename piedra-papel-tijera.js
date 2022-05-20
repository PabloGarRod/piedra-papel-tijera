
//Mediante esta función hacemos que la máquina elija un número aleatorio del 1 al 3
//Después a cada numero le asignamos un string "piedra", "papel" y "tijera"
//Finalmente la función retorna el string asignado aleatoriamente

function eleccionMaquina(){
    var num = Math.floor((Math.random() * (3)) + 1);
    switch(num){
        case 1: 
            return "Piedra";
            break;
        case 2:
            return "Papel";
            break;
        case 3:
            return "Tijera";
            break;
    }
}

function jugar(eleccionUsuario){
    var maquina = eleccionMaquina();
    function ganador(){
        if (eleccionUsuario == "Piedra"){
            switch(maquina){ 
                case "Piedra":
                    return "Piedra y piedra empatan."
                    break;
                case "Papel":
                    return "Papel gana a piedra. Has perdido."
                    break;
                case "Tijera":
                    return "Piedra gana a tijera. Has ganado"
            }
        }else if(eleccionUsuario == "Tijera"){
            switch(maquina){
                case "Piedra":
                    return "Piedra gana a tijera. Has perdido"
                    break;
                case "Papel":
                    return "Tijera gana a papel. Has ganado"
                    break;
                case "Tijera":
                    return "Tijera y Tijera empatan."
            }
        }else if(eleccionUsuario == "Papel"){
            switch(maquina){
                case "Piedra":
                    return "Papel gana a piedra. Has ganado."
                    break;
                case "Papel":
                    return "Papel y papel empatan."
                    break;
                case "Tijera":
                    return "Tijera gana a papel. Has perdido."
            }
        }
    }
    console.log("Has elegido " + eleccionUsuario+".");
    console.log("La máquina ha elegido " + maquina + ".");
    console.log("Resultado:")
    console.log(ganador());
}
