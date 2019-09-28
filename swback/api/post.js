const Form = require('@swback/models')
var postForm = async ( req, res ) =>{
    var { name, manufacturer, passengers } = req.body
    if(!name || !manufacturer ){
        return res.status(400).json({
          message : 'Faltan parámetros',
          code_status : 4001,
          param : req.body
        })
      }
    let formInsert = new Form({
      name, passengers, manufacturer
    })
    let [data, error] = await formInsert.insertForm()
                        .then( data => [data, null]).catch( error => [ null, error] )
    if( error ){
      return res.status(500).json({
        message : 'Error insertando los formularios',
        code_status : 5001,
        error
      })
    }

    res.status(200).json({
      message : "Ok",
      code_status : 200
    })
}

module.exports = postForm
