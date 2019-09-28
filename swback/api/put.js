const Form = require('@swback/models')

var putForm = async ( req, res )=> {
    const { name, manufacturer, passengers } = req.body 
    if( !req.params.id ){
        return res.status(400).json({
          message : 'Faltan parámetros',
          code_status : 4001,
          param : req.body
        })
      }
    
    let [ data, error ] = await Form.updateForm(req.params.id, { name, manufacturer, passengers } )
                          .then( data => [data, null]).catch( error => [ null, error] ) 
    if( error || isNaN( req.params.id ) ){
        return res.status(500).json({
            message : 'Error actualizando los formularios',
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


module.exports = putForm