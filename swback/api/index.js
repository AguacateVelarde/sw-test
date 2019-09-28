const { Router } = require('express')
const router = Router()
const { getAllForms, getForm } = require('./get.js')
const postForm = require('./post.js')
const putForm = require( './put.js')
const deleteForm = require('./delete.js')

router.post( '/form', postForm )
router.get( '/form', getAllForms )
router.get( '/form/:id', getForm )
router.put( '/form/:id', putForm )
router.delete( '/form/:id', deleteForm )


module.exports = router