const { updateJSON, readJSON } = require('../utils/fileSystem')

async function deleteNote(id) {
    const savedNotes = await readJSON()
    updatedNotes = savedNotes.filter((obj) => obj.id !== id)
     return await updateJSON(updatedNotes)
}


module.exports = { deleteNote }