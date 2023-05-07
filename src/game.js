export function game(opcionUsuario) {
    opcionUsuario = option(opcionUsuario);
    let opcionMaquina = randomOption();

    if(opcionUsuario === opcionMaquina) {
        console.log("EMPATE");
    } else if((opcionMaquina === "Papel" && opcionUsuario === "Piedra") || (opcionMaquina === "Piedra" && opcionUsuario === "Tijera") || (opcionMaquina === "Tijera" && opcionUsuario === "Papel")) {
        console.log("PERDISTE");
    } else {
        console.log("GANASTE");
    }
}

function randomOption() {
    let random = Math.floor(Math.random() * (1 - 3 + 1) + 1);

    return option(random);
}

function option(numberO) {
    switch(numberO) {
        case 1:
            return "Piedra";
        case 2:
            return "Papel";
        case 3:
            return "Tijera";
    }
}