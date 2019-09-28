const Form = require('@swback/models')

var getAllForms = async ( req, res ) =>{
    let [ data, error ] = await Form.getAllForms()
                          .then( data => [data, null]).catch( error => [ null, error] )                      
    if( error ){
      return res.status(500).json({
        message : 'Error obteniendo los formularios',
        code_status : 5001,
        error
      })
    }   
  
    res.status(200).json({
      message : "Ok",
      code_status : 200,
      data
    })
  }
  
var getForm = async ( req, res )=> {
    if( !req.params.id ){
      return res.status(400).json({
        message : 'Faltan parámetros',
        code_status : 4001,
        param : req.body
      })
    }
  
    let [ data, error ] = await Form.getFormById(req.params.id)
                          .then( data => [data, null]).catch( error => [ null, error] )                      
    if( error ){
      return res.status(500).json({
        message : 'Error obteniendo los formularios',
        code_status : 5001,
        error
      })
    }   
  
    res.status(200).json({
      message : "Ok",
      code_status : 200,
      data
    })
  }


  module.exports = {
    getAllForms,
    getForm
  }