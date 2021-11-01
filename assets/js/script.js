/** Desafio Cachipun contra la Maquina */
/** Variables */
const TIJERAS = 1;
const PAPEL = 2;
const PIEDRA = 3;

const LABEL_CACHIPUN = {
    1: 'Tijeras',
    2: 'Papel',
    3: 'Piedra',
}

const MIN = 1;
const MAX = 3;

const LABEL_JUGADOR = 'Jugador';
const LABEL_MAQUINA = 'Maquina';

/** Solicitud de Números */
const n_juegos = window.prompt('Ingrese cantidad de veces a jugar.');

/** Parseo */
const n_juegos_int = parseInt(n_juegos);

/** Validacion */
if (typeof n_juegos_int === 'NaN' || isNaN(n_juegos_int)) {
    window.alert('Porfavor, Ingrese cantidad de veces a jugar.');
    throw new Error("Porfavor, Ingrese cantidad de veces a jugar. Stop script!!");
}

/** Funciones */
const getRandomEleccionMaquina = function () {
    return Math.floor(Math.random() * (MAX - MIN)) + MIN;
}

const indicarResultado = function (jugador_jugada, maquina_jugada) {
    let ganador = 'S/A';
    let perdedor = 'S/A';
    let empate = false;
    switch (jugador_jugada) {
        case TIJERAS:
            if (maquina_jugada === PAPEL) {
                ganador = LABEL_JUGADOR;
                perdedor = LABEL_MAQUINA;
            } else if (maquina_jugada === PIEDRA) {
                ganador = LABEL_MAQUINA;
                perdedor = LABEL_JUGADOR;
            } else {
                empate = true;
            }
            break;
        case PAPEL:
            if (maquina_jugada === PIEDRA) {
                ganador = LABEL_JUGADOR;
                perdedor = LABEL_MAQUINA;
            } else if (maquina_jugada === TIJERAS) {
                ganador = LABEL_MAQUINA;
                perdedor = LABEL_JUGADOR;
            } else {
                empate = true;
            }
            break;
        case PIEDRA:
            if (maquina_jugada === TIJERAS) {
                ganador = LABEL_JUGADOR;
                perdedor = LABEL_MAQUINA;
            } else if (maquina_jugada === PAPEL) {
                ganador = LABEL_MAQUINA;
                perdedor = LABEL_JUGADOR;
            } else {
                empate = true;
            }
            break;
        default:
            break;
    }
    const mensaje = `Jugador ${LABEL_CACHIPUN[jugador_jugada]}\nVS\nMaquina: ${LABEL_CACHIPUN[maquina_jugada]}\n${empate ? 'Ha sido empate' : ganador === LABEL_JUGADOR ? 'Felicidades has Ganado' : 'Has perdido contra la maquina'}`;
    window.alert(mensaje);
}

/** Ejecucion */
for (let index = 0; index < n_juegos_int; index++) {
    /** Solicitud Eleccion Usuario */
    let eleccion_usuario = parseInt(window.prompt('1.-Tijeras. \n2.-Papel \n3.-Piedra '));
    if (typeof eleccion_usuario === 'NaN' || isNaN(eleccion_usuario)) {
        window.alert('Porfavor, Ingrese cantidad de veces a jugar.');
        throw new Error("Porfavor, Ingrese cantidad de veces a jugar. Stop script!!");
    }
    let eleccion_maquina = getRandomEleccionMaquina();
    indicarResultado(eleccion_usuario, eleccion_maquina);
}