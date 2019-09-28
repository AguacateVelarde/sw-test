const { database } = require('@swback/db')

class Form{
    constructor({
        name,
        passengers,
        manufacturer
    }){
        this.name = name
        this.passengers = passengers
        this.manufacturer = manufacturer
    }

    getInformation(){
        return {
            name,
            passengers,
            manufacturer
        }
    }

    get toJson(){
        return {
            name,
            passengers,
            manufacturer
        }
    }

    async insertForm(){
       return database('form').insert({
            name : this.name,
            passengers: this.passengers,
            manufacturer : this.manufacturer
        })
    }

    static async updateForm( id, _form ){
        return database('form')
               .where({ id_form : id })
               .update(_form) 
    }

    static async deleteForm( id ){
        return database('form')
               .where({ id_form : id })
               .del() 
    }

    static async getFormById( id ){
        return  database('form')
        .where({ id_form : id })
    }
    static async getAllForms( id ){
        return  database('form')
    }
}

module.exports = Form