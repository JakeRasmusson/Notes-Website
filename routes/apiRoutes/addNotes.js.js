const router = require('express').Router()
const { updateNotes } = require('../../modules/updateNotes')

router.post('/', async (req,res) => {
    const inboundNotes = req.body
    const savedNotes = await updateNotes(inboundNotes)
    res.json(savedNotes)
})


module.exports = router