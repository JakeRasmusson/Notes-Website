const router = require('express').Router()
const { readJSON } = require('../../utils/fileSystem')

router.get('/', async (req,res) => {
    JSONNotes = await readJSON()
    res.json(JSONNotes)
})


module.exports = router