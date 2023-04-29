import "../config/config.js"

export class BaseDao {

    constructor() {
        if (this.constructor === BaseDao) {
            throw new Error('Clase "BaseDao" no puede iniciarse')
        }
    }

    create() {
        throw new Error('Method create() debe implementarse')
    }

    getAll() {
        throw new Error('Method getAll() debe implementarse')
    }

    deleteById() {
        throw new Error('Method deleteById() debe implementarse')
    }
}