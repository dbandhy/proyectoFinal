//utils

import { randomUUID } from "crypto"

function createId() { 
    return randomUUID()
}

// modelo

class PersonaNuevaDto {
    constructor({nombre, mail}) {
        if ( typeof nombre != 'string' ) throw new Error('por favor, coloque un nombre válido')
        if ( !nombre ) throw new Error('coloque un nombre')
        this.nombre  = nombre

        if ( typeof mail != 'string' ) throw new Error('tipo inválido')
        if (!mail) throw new Error('param requerido')
        this.mail=mail
    }
    
}

class Persona {
     #id
    #nombre
    #mail

    constructor({ id = createId(), nombre, mail}) {
        this.id = id
        this.nombre  = nombre
        this.mail=mail
    }
    asDto() {
        return  {
        id: this.#id,
        nombre: this.#nombre,
        mail: this.#mail
        } 
    }
}

class Carrito {
    #id
    #productos
   
    constructor({ id, productos = [ ] }) {
       this.id = id
       this.productos  = productos
       
   }
   asDto() {
       return  {
       id: this.#id,
       productos: this.#productos,
       } 
   }
   
}


//controller
async function postPersonas(req, res, next) {
    try {
        const personasNuevaDto = new PersonaNuevaDto(req.body)
        const result = await personasService.registrar(personasNuevaDto)
        res.status(201).json(result) 
        
    } catch (error) {
        next(error)
        
    }

}

//Service 

class PersonasService {
    async registrar(datosPersonaNueva) {
        const persona = new Persona(datosPersonaNueva)

    }
}