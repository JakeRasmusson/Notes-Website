const router = require('express').Router()
const { deleteNote } = require('../../modules/deleteNote')

router.delete('/:id', async (req,res)  => {
    const id = req.params.id
    await deleteNote(id)
    res.end()
})



module.exports = router