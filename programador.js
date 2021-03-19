// Importar modulo Later.js:
const later = require('later');
// Usar zona horaria local:
const EventEmitter = require('./events');

class Programador extends EventEmitter {
    constructor(programas){
        super();
        later.date.localTime();
        
          let sched = '';
          let cam = '';
          for (let step = 0; step < programas.length; step++) {
            //console.log('$(programas[step].hora)')
            cam = 'at ' + programas[step].hora;
            sched = later.parse.text(cam);
            later.setInterval(() => this.emit('ideal', programas[step].temperatura), sched);
            console.log(`Cambio programado de temperatura a ${programas[step].temperatura}ºC a la(s) ${programas[step].hora}`)
          }  
    }
}

exports = module.exports = Programador;