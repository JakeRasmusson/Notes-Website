const { json } = require('express')
const path = require('path')
const fs = require('fs/promises')
const dbPath = path.join(__dirname, '..', 'db', 'db.json')

async function updateJSON(notes) {
     return await fs.writeFile(dbPath, JSON.stringify(notes))
     
}

async function readJSON() {
    const content = await fs.readFile(dbPath, 'utf-8')
    return JSON.parse(content)
}


module.exports = { updateJSON , readJSON }