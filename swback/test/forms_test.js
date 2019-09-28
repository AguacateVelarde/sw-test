let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../index.js')
let should = chai.should()

chai.use(chaiHttp)


describe('FORM API for Star Wars test, OK Request', () =>{
    it('it should /GET, recibe all forms', (done)=>{
        chai.request(server)
        .get('/api/v1/form')
        .end((err, res) => {
            res.should.have.status(200)       
            res.body.should.have.property('data')
            done()
        })
    })

    it('it should /GET, recibe specific forms', (done)=>{
        chai.request(server)
        .get('/api/v1/form/2')
        .end((err, res) => {
            res.should.have.status(200)       
            res.body.should.have.property('data')
            done()
        })
    })

    it('it should /POST, insert new form', (done)=>{
        chai.request(server)
        .post('/api/v1/form')
        .send({
            "name": "Death Star",
            "manufacturer": "Imperial Department of Military Research, Sienar Fleet Systems",
            "passengers": 843342
          })
        .end((err, res) => {
            res.should.have.status(200)       
            res.body.should.have.property('message')
            res.body.should.have.property('message').eql('Ok')
            done()
        })
    })

    it('it should /PUT, update form', (done)=>{
        chai.request(server)
        .put('/api/v1/form/4')
        .send({
            "name": "Death Star 2",
          })
        .end((err, res) => {
            res.should.have.status(200)       
            res.body.should.have.property('message')
            res.body.should.have.property('message').eql('Ok')
            done()
        })
    })

    it('it should /DELETE, update form', (done)=>{
        chai.request(server)
        .delete('/api/v1/form/4')
        .end((err, res) => {
            res.should.have.status(200)       
            res.body.should.have.property('message')
            res.body.should.have.property('message').eql('Ok')
            done()
        })
    })
})
