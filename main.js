const Habitacion = require('./habitacion');
const Climatizador = require('./climatizador');
const Termostato = require('./termostato');
const Programador = require('./programador');

// Creamos una habitacion:
const dormitorio = new Habitacion();
dormitorio.temperatura = 22;

// Creamos un climatizador para la habitacion:
const climatizador = new Climatizador(dormitorio);

// Creamos un Termostato que mira la temperatura de la habitacion:
const termostato = new Termostato(dormitorio);

// Programación el programador
let programas = [
    { hora: "15:50",
      temperatura: 24
    },
    { hora: "14:51",
      temperatura: 26
    },
    { hora: "08:08",
      temperatura: 26
    },
    { hora: "08:09",
      temperatura: 27
    }
  ]
// Creamos un Programador que programa la temperatura de la habitacion:
const programador = new Programador(programas);

// Configuramos el termostato para controlar la temperatura:
termostato.on('muchofrio', () => climatizador.calentar());
termostato.on('muchocalor', () => climatizador.enfriar());

// Mostar la temperatura periodicamente:
termostato.on('tic', (temp) => console.log(`${temp.toFixed(1)}ºC`));

// Cambiar la temperatura cuando lo ordena el programador
programador.on('ideal', (tempe) => termostato.indicarTemperaturaIdeal(tempe) )

// Configurar la temp ideal a 20 grados:
termostato.indicarTemperaturaIdeal(20);

// Encender el termostato:
termostato.encender();
