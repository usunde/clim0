class EventEmitter {
    constructor() {
		this.eventos = {};
        //console.log(this.constructor.name);
	}

    on(event, callback) { 
        if (!this.eventos[event]) {     // Si no existe el evento event lo crea 
            this.eventos[event] = [];
        } 
        this.eventos[event].push(callback); // Asocia el evento event a uno o más de sus callback
        console.log(`Creado en el objeto ${this.constructor.name} el evento ${event}`);
        //console.log(this.eventos);
    }  

    emit(event, args) {
        this.eventos[event].forEach((callback) => { // Busca el array correspondiente al callback
        callback(args); // Llama al callback
        })
    }
}

exports = module.exports = EventEmitter;