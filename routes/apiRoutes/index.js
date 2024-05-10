const router = require('express').Router()
const addNotes = require('./addNotes.js')
const getNotes = require('./getNotes.js')
const deleteNote = require('./deleteNotes.js')

router.use('/notes', deleteNote)
router.use('/notes', getNotes)
router.use('/notes', addNotes)


module.exports = router