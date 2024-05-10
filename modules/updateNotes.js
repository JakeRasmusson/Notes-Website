const { updateJSON, readJSON } = require('../utils/fileSystem')
const generateUniqueId = require('generate-unique-id')

async function updateNotes(inboundNotes) {
    const savedNotes = await readJSON()
    inboundNotes.id = generateUniqueId()
    savedNotes.push(inboundNotes)
    await updateJSON(savedNotes)
    return savedNotes
}


module.exports = { updateNotes }