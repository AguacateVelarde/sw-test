let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../index.js')
let should = chai.should()

chai.use(chaiHttp)


describe('FORM API for Star Wars test, BAD Request', () =>{

    it('it should /GET, recibe unknown form', (done)=>{
        chai.request(server)
        .get('/api/v1/form/-1')
        .end((err, res) => {
            res.should.have.status(200)       
            res.body.should.have.property('data')
            done()
        })
    })

    it('it should /POST, missing fields', (done)=>{
        chai.request(server)
        .post('/api/v1/form')
        .send({
            "name": "Death Star",      
          })
        .end((err, res) => {
            res.should.have.status(400)       
            res.body.should.have.property('message')
            res.body.should.have.property('message').eql('Faltan parámetros')
            done()
        })
    })

    it('it should /PUT, update form', (done)=>{
        chai.request(server)
        .put('/api/v1/form/dcsdfad2')        
        .send({
            "name": "Death Star 2",
        })
        .end((err, res) => {
            res.should.have.status(500)       
            res.body.should.have.property('message').eql('Error actualizando los formularios')
            done()
        })
    })

    it('it should /DELETE, update form', (done)=>{
        chai.request(server)
        .delete('/api/v1/form/3eqw')
        .end((err, res) => {
            res.should.have.status(500)       
            res.body.should.have.property('message')
            res.body.should.have.property('message').eql('Error eliminando los formularios')
            done()
        })
    })

    
})
