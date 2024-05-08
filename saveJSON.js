const { json } = require('express')
const fs = require('fs/promises')


async function updateJSON(notes) {
     return await fs.writeFile('notes.json', JSON.stringify(notes))
     
}

async function readJSON() {
    const content = await fs.readFile('notes.json', 'utf-8')
    return JSON.parse(content)
}


module.exports = { updateJSON , readJSON }